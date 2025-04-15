import { runInAction } from 'mobx';
import { ethers } from 'ethers';

const subscriptionId: string = import.meta.env.VITE_CHAINLINK_VRF_SUBSCRIPTION_ID;
const pairingEngineAddress: string | undefined = import.meta.env.VITE_PAIRING_ENGINE_ADDRESS;

export abstract class ContractStore implements ContractModel {
    provider: ethers.BrowserProvider | undefined;
    signer: ethers.JsonRpcSigner | undefined;
    connecting: boolean = false;
    isConnected: boolean = false;
    protected subscriptionId: string = subscriptionId;
    pairingEngineAddress: string | undefined = pairingEngineAddress;
    async connect() {
        try {
            runInAction(() => {
                this.connecting = true;
            });
            if (window.ethereum) {
                const prov = new ethers.BrowserProvider(window.ethereum);
                await prov.send("eth_requestAccounts", []);
                const sig = await prov.getSigner(0);
                runInAction(() => {
                    this.provider = prov;
                    this.signer = sig;
                });
                try {
                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: '0xaa36a7' }],
                    });
                } catch (switchError) {
                    console.error("Error switching to the Sepolia network", switchError);
                }
                runInAction(() => {
                    this.isConnected = sig !== undefined;
                });
            }
        } finally {
            runInAction(() => {
                this.connecting = false;
            });
        }
    }
}