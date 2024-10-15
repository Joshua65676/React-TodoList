import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-[45rem]">
      <h1 className="mb-8 text-4xl font-bold mx:text-center">Welcome to JoshDev Todo List App</h1>
      <div className="space-x-4">
        <Link to="/signup">
          <Button className="px-4 py-2 text-lg font-bold text-white uppercase bg-blue-500 rounded hover:bg-blue-700">
            Sign Up
          </Button>
        </Link>
        <Link to="/login">
          <Button className="px-4 py-2 text-lg font-bold text-white uppercase bg-green-500 rounded hover:bg-green-700">
            Log In
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
