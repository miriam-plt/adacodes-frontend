import React, { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "http://localhost:5006";
 
const AuthContext = React.createContext();
 
function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState(null);
  
  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  }

  const authenticateUser = () => {
    const storedToken = localStorage.getItem("authToken");      
      
    if (storedToken) {
      axios.get(
        `${API_URL}/auth/verify`, 
        { headers: { Authorization: `Bearer ${storedToken}`} }
      )
      .then((response) => { 
        const username = response.data;        
        setIsLoggedIn(true);
        setIsLoading(false);
        setUsername(username);        
      })
      .catch((error) => {       
        setIsLoggedIn(false);
        setIsLoading(false);
        setUsername(null);        
      });      
    } else {
        setIsLoggedIn(false);
        setIsLoading(false);
        setUsername(null);      
    }   
  }
  const removeToken = () => { 
    localStorage.removeItem("authToken");
}

const logOutUser = () => {                    
    removeToken();  
    authenticateUser();
}

  useEffect(() => {                                  
    authenticateUser(); 
  }, []);
 
  return (
    <AuthContext.Provider 
    value={{ 
        isLoggedIn, 
        isLoading, 
        username, 
        storeToken, 
        authenticateUser,
        logOutUser
        }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
 
export { AuthProviderWrapper, AuthContext };