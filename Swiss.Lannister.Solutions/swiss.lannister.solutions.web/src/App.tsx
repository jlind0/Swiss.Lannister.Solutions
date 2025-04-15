import { Routes, Route } from 'react-router-dom';
import PairingStoreView from './pairingstore.view.tsx';
import { CContainer } from '@coreui/react'

function App() {
    return (
        <CContainer className="px-4" lg>
            <h1>Lannister Swiss Pairing</h1>
            <div>
                <Routes>
                    <Route path="/" element={<h2>Welcome to the Lannister Swiss Pairing Portal</h2>} />
                    <Route path="/pairing-engine" element={<PairingStoreView />} />
                    <Route path="*" element={<h2>404 - Page Not Found</h2>} />
                </Routes>
            </div>
        </CContainer>
    );
}

export default App;