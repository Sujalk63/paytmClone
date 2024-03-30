import React from 'react';

export const Signin = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg overflow-hidden shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Signin</h1>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
          <input id="username" type="text" className="w-full border-gray-300 border rounded-md p-2 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
          <input id="password" type="password" className="w-full border-gray-300 border rounded-md p-2 focus:outline-none focus:border-blue-500" />
        </div>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 w-full">Signin</button>
        <p className="mt-4 text-gray-700 text-center">Don't have an account? <a href="/signup" className="text-blue-500 font-semibold">Signup</a></p>
      </div>
    </div>
  );
}

// In named exports (e.g., export const, export function), 
// you need to use curly braces when importing to specify 
// which named exports you want to import. However, with 
// export default, you don't need curly braces when importing, 
// as it exports a single value as the default export of the module.


// apart from anker tag we could have used link atag where to would be the prop which is a predefined prop for routing
