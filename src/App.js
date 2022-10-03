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
import AboutPage from './pages/AboutPage';
import ThankYouPage from './pages/ThankYouPage';

import IsPrivate from "./components/IsPrivate";  // <== IMPORT
import IsAnon from "./components/IsAnon";  // <== IMPORT

function App() {
  return (
    <div className="App">
      <Navbar />
    
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/login"} element={<IsAnon><LoginPage /></IsAnon>} />
        <Route path={"/signup"} element={<IsAnon><SignupPage /></IsAnon>} />
        <Route path={"/service/add"} element={<IsPrivate><AddService /></IsPrivate>} />
        <Route path={"/service/edit/:serviceId"} element={<EditService />} />
        <Route path={"/service/detail/:serviceId"} element={<ServiceDetails />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/thankyou"} element={<ThankYouPage />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
