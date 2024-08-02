import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginRegister/LoginForm';
import RegisterForm from './components/LoginRegister/RegisterForm';
import HomePage from './components/LoginRegister/HomePage';
import NavBar from './components/LoginRegister/NavBar';
import LandingPage from './components/LoginRegister/LandingPage';
import DiagnosticTool from './components/LoginRegister/DiagnosticTool';
import RepairGuides from './components/LoginRegister/RepairGuides';
import MaintenanceTips from './components/LoginRegister/MaintenanceTips';
import CarCareBasics from './components/LoginRegister/CarCareBasics';
import AdvancedRepairs from './components/LoginRegister/AdvancedRepairs';
import AboutUs from './components/LoginRegister/AboutUs';
import AdminDashboard from './components/LoginRegister/AdminDashboard';
function App() {

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/landing" element={<LandingPage />} />
                <Route path="/learn-more/diagnostic-tool" element={<DiagnosticTool />} />
                <Route path="/learn-more/repair-guides" element={<RepairGuides />} />
        <Route path="/learn-more/maintenance-tips" element={<MaintenanceTips />} />
        <Route path="/learn-more/car-care-basics" element={<CarCareBasics />} />
        <Route path="/learn-more/advanced-repairs" element={<AdvancedRepairs />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/admin" element={<AdminDashboard />} />
                
            </Routes>
        </Router>
    );
}

export default App;
