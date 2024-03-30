import React from 'react';

export const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 test">
      <div className="max-w-md w-full bg-white rounded-lg overflow-hidden shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        <form className="w-full">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input type="text" id="username" name="username" className="form-input mt-1 w-full border border-gray-300 rounded focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700">First Name</label>
            <input type="text" id="firstName" name="firstName" className="form-input mt-1 w-full border border-gray-300 rounded focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
            <input type="text" id="lastName" name="lastName" className="form-input mt-1 w-full border border-gray-300 rounded focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="form-input mt-1 w-full border border-gray-300 rounded focus:border-blue-500" />
          </div>
          <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full mb-4">Sign Up</button>
        </form>
        <p className="text-gray-600 text-sm text-center">Already have an account? <a href="/signin" className="text-blue-500">Sign In</a></p>
      </div>
    </div>
  );
};
