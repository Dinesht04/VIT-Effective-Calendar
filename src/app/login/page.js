'use client'

import Link from 'next/link'

import React, { useState } from 'react';

const ids = [
  {
    id:"Mayank@gmail.com",
    password:1234
  },
  {
    id:"Shreya@gmail.com",
    password:1234
  },
  {
    id:"Harsh@gmail.com",
    password:1234
  },
  {
    id:"Gay@gmail.com",
    password:1234
  },
  {
    id:"admin@gmail.com",
    password:"admin"
  }
]

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    //write code to redirect to /login/user if id and passwords match from const id.
    //if ID is admin, redirect to /login/admin 
    // Input validation (optional but recommended)
    
  };

    return (
        
        <div>
            Login Page 
            <h1><Link href='/login/admin'>Login AS Admin</Link></h1>
            <h1><Link href='/login/user'>Login AS User</Link></h1>
            <div className="flex min-h-screen items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 rounded-xl bg-white shadow-md p-8">
        <h1 className="text-2xl font-semibold text-center">Login</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2">
            <label htmlFor="username" className="text-sm font-medium">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 focus:ring-opacity-50 text-gray-700"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 focus:ring-opacity-50 text-gray-700"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember-me" name="remember-me" className="h-5 w-5 rounded border-gray-300 accent-indigo-500 focus:ring-indigo-500" />
              <label htmlFor="remember-me" className="text-sm font-medium text-gray-700">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
        </div>
    
    );
  }
  