import React, { useState } from 'react';
import axios from 'axios';
import { json, useNavigate } from 'react-router-dom';

const Login = ({ login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:3002/api/user/login', { username, password });
      if (response.status === 200) {
        localStorage.setItem('user',JSON.stringify(response.data.userData))
        
        login();
        navigate("/");
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm">
        <form onSubmit={handleLogin} className="bg-white shadow-lg rounded-lg px-10 py-8">
          <h2 className="text-center text-3xl font-semibold text-green-700 mb-8">Sign In</h2>

          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="shadow-sm border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-green-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              disabled={loading}
              className={`bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Logging In...' : 'Log In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
