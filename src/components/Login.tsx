import React, { useState } from 'react';
import { auth, googleProvider, githubProvider } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/todolist');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/todolist');
    } catch (error) {
      console.error('Error logging in with Google:', error);
    }
  };

  const handleGithubLogin = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      navigate('/todolist');
    } catch (error) {
      console.error('Error logging in with GitHub:', error);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-[45rem]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Log In</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Password"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
          >
            Log In
          </Button>
        </form>
        <div className="flex flex-col space-y-2">
          <Button
            onClick={handleGoogleLogin}
            className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
          >
            Log In with Google
          </Button>
          <Button
            onClick={handleGithubLogin}
            className="w-full px-4 py-2 font-bold text-white bg-gray-800 rounded hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300"
          >
            Log In with GitHub
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
