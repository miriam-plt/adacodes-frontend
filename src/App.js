import './App.css';
import { Routes, Route } from "react-router-dom"; 
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

import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

import React from "react";

function App() {

  return (
    <div className="App">
      
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/login"} element={<IsAnon><LoginPage /></IsAnon>} />
        <Route path={"/signup"} element={<IsAnon><SignupPage /></IsAnon>} />
        <Route path={"/service/add"} element={<IsPrivate><AddService /></IsPrivate>} />
        <Route path={"/service/edit/:serviceId"} element={<IsPrivate><EditService /></IsPrivate>} />
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
