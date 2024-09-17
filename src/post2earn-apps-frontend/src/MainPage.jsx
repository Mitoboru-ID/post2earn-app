import React, { useState, useEffect } from 'react';
import { AuthClient } from "@dfinity/auth-client";
import { login, logout } from './InternetIdentity';

const MainPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginSuccess, setShowLoginSuccess] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const authClient = await AuthClient.create();
      const authenticated = await authClient.isAuthenticated();
      setIsAuthenticated(authenticated);
    };
    checkAuth();
  }, []);

  const handleLogin = async () => {
    await login();
    setIsAuthenticated(true);
    setShowLoginSuccess(true);
    setTimeout(() => setShowLoginSuccess(false), 3000); // Hide success message after 3 seconds
  };

  const handleLogout = async () => {
    await logout();
    setIsAuthenticated(false);
  };

  const handleExplore = () => {
    // TODO: Implement explore functionality
    console.log("Explore button clicked");
  };

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      {!isAuthenticated ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">Selamat datang di Mitoboru Apps</h1>
          <p className="mb-4">Silahkan login dahulu</p>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={handleLogin}
          >
            Login dengan Internet Identity
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-4">Welcome to Mitoboru Apps</h1>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors mr-4"
            onClick={handleExplore}
          >
            Explore
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
      {showLoginSuccess && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
          Login berhasil!
        </div>
      )}
    </div>
  );
};

export default MainPage;