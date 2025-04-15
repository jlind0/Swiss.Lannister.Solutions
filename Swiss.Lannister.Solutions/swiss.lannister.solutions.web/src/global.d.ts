import { ethers } from 'ethers';
declare global {
    interface Window {
        ethereum?: ethers.Eip1193Provider;
    }
    declare namespace NodeJS {
        interface ProcessEnv {
            VITE_CHAINLINK_VRF_SUBSCRIPTION_ID: string;
            VITE_PAIRING_ENGINE_ADDRESS?: string;
        }
    }
    interface ContractModel{
        provider: ethers.BrowserProvider | undefined;
        signer: ethers.JsonRpcSigner | undefined;
    }
}
export { };