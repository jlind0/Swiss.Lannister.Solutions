import { runInAction, makeObservable, observable } from 'mobx';
import { PairingEngine__factory } from './typechain';
import { ContractStore } from './store.ts';

export class PairingEngineStore extends ContractStore {
    isDeployed: boolean = this.pairingEngineAddress !== undefined;
    isDeploying: boolean = false;
    constructor() {
        super();
        makeObservable(this, {
            isDeployed: observable,
            isDeploying: observable,
            pairingEngineAddress: observable,
            isConnected: observable,
            provider: observable,
            signer: observable,
            connecting: observable
        });
    }
    async deploy() {
        try {
            if (!this.isDeployed && this.provider && this.signer && this.isConnected) {
                runInAction(() => {
                    this.isDeploying = true;
                });
                const factory = new PairingEngine__factory(this.signer);
                const contract = await factory.deploy(this.subscriptionId);
                await contract.waitForDeployment();
                const code = await contract.getDeployedCode();
                if (code !== undefined) {
                    const address = await contract.getAddress();
                    runInAction(() => {
                        this.pairingEngineAddress = address;
                        this.isDeployed = true;
                    });
                }
                else
                    alert("Error deploying the contract. Please check the console for more details.");
            }
        } catch (error) {
            console.error("Error deploying the contract:", error);
            alert("Error deploying the contract. Please check the console for more details.");
        }
        finally {
            runInAction(() => {
                this.isDeploying = false;
            });
        }
    }
}