import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserProfile from "./pages/UserProfile.jsx";
import ProtectedRoute from './components/ProtectedRoute.jsx';
function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Rota Protegida por Autenticação*/}
            <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<UserProfile />} />
            </Route>

            <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
    );
}

export default App;