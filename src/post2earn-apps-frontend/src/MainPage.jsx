import React, { useState, useEffect } from 'react';
import { AuthClient } from "@dfinity/auth-client";
import { login, logout } from './InternetIdentity';
import Layout from './Partials/Layout';


const MainPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginSuccess, setShowLoginSuccess] = useState(false);
  const [isClient, setClient] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      const authClient = await AuthClient.create();
      const authenticated = await authClient.isAuthenticated();
      setIsAuthenticated(authenticated);
      if (authenticated) {
        setClient(authenticated)
      }
      
    };
    checkAuth();
  }, []);

  const handleLogin = async () => {
    await login();
    if (isClient === true) {
      setIsAuthenticated(true);
    }
    setShowLoginSuccess(true);
    setTimeout(() => setShowLoginSuccess(false), 3000); // Hide success message after 3 seconds
  };

  const handleLogout = async () => {
    await logout();
    setIsAuthenticated(false);
  };

 
  return (
    <>
      <Layout isAuthenticated={isAuthenticated} login={handleLogin} logout={handleLogout} />
    </>
  );
};

export default MainPage;