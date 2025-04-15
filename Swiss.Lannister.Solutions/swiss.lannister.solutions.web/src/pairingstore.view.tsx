import { observer } from 'mobx-react-lite';
import { CButton, CContainer } from '@coreui/react'
import { PairingEngineStore } from './pairingengine.store.ts';

const pairingEngineStore = new PairingEngineStore();

interface PairingStoreViewProps {
    store: PairingEngineStore;
}

const DisconnectedView = observer(({ store }: PairingStoreViewProps) => {
    return (
        <CContainer>
            <h1>Pairing Store</h1>
            <p>Please connect to the wallet.</p>
            <CButton onClick={async () => await store.connect()} disabled={store.connecting}>
                {store.isConnected ? "Connected" : store.connecting ? "Connecting..." : "Connect"}
            </CButton>
        </CContainer>
    )
});

const ConnectedView = observer(({store }: PairingStoreViewProps) => {
    return (
        <CContainer>
            <h1>Pairing Store</h1>
            <p>Wallet Address: {store.signer?.address}</p>
            
            {!store.isDeployed ? (
                <CButton onClick={async () => await store.deploy()} disabled={store.isDeploying}>
                    {store.isDeploying ? "Deploying..." : "Deploy"}
                </CButton>
            ) : <p>Pairing Store Address: {store.pairingEngineAddress}</p> }
        </CContainer>
    )
});
const PairingStoreView = observer(() => {
    return (
        <>
            <title>Lannister Swiss Pairing - Engine Management</title>
            <div>
                {pairingEngineStore.isConnected && pairingEngineStore.signer ? (
                    <ConnectedView store={pairingEngineStore} />
                ) : (
                    <DisconnectedView store={pairingEngineStore} />
                )}
            </div>
        </>
    )
});
export default PairingStoreView;