import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistroProveedor from './components/auth/RegistroProveedores';
import NavBar from './components/pages/NavBar';

function App() {
    return (
        <div>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/registroProveedor" element={<RegistroProveedor />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
