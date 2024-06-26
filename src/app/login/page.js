'use client'

import Image from 'next/image';

import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    if(username == "admin" && password == "admin"){
      router.push('/login/admin');
    }
    else{
      window.location.href = `/assets/${username}.html`
    }

    // if (username=="Mayank@gmail.com" ){
    //    // redirect to login/user
    //    router.push('/login/user');
    // }
    // else if (username=="Shreya@gmail.com") {
    //     router.push('/login/admin')
    // }
    // else if (username=="Harsh@gmail.com") {
    //   router.push('/login/admin')
    // }
    // else if (username=="Gay@gmail.com") {
    //   router.push('/login/admin')
    // }
    // else if (username=="admin@gmail.com") {
    //   router.push('/login/admin')
    // }
    //  else {
    //   setErrorMessage('Invalid username or password');
    //   console.log(errorMessage);
    // }
  };

    return (
        
        <div>
  
            <div className="flex min-h-screen items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 rounded-xl bg-white shadow-md p-8">
        <Image className='ml-4 pl-8' src='/vit_logo.png' 
          height={200}
          width={200}
        />
      <h1 className="text-2xl font-semibold text-center">VIT Effective Calender</h1>
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
  