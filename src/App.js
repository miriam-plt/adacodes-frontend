import './App.css';
import { Routes, Route } from "react-router-dom"; 
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ErrorPage from './pages/ErrorPage';
import AddService from './pages/AddServicePage';
import EditService from './pages/EditServicePage';
import ServiceDetails from './pages/ServiceDetailsPage';
import ServiceListPage from './pages/ServiceListPage';
import AboutPage from './pages/AboutPage';
import ThankYouPage from './pages/ThankYouPage';

function App() {
  return (
    <div className="App">
      <Navbar />
    
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/signup"} element={<SignupPage />} />
        <Route path={"/service/add"} element={<AddService />} />
        <Route path={"/service/edit/:serviceId"} element={<EditService />} />
        <Route path={"/service/list"} element={<ServiceListPage />} />
        <Route path={"/service/:serviceId"} element={<ServiceDetails />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/thankyou"} element={<ThankYouPage />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
