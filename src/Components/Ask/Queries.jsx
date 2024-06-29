import React from 'react';
import { useState } from 'react';

function Queries() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !query) {
      setError('All fields are required.');
      return;
    }
    setError('');
    console.log('Form submitted:', { name, email, query });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen bg-white">
      <form
        onSubmit={handleSubmit}
        className="lg:w-1/2 bg-yellow-500 p-8 rounded-l-xl shadow-xl shadow-gray-400 max-w-md w-full mb-4 lg:mb-0"
      >
        <h2 className="text-2xl font-bold mb-6 text-black">Ask Your Query</h2>

        {error && <div className="mb-4 text-red-500">{error}</div>}

        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 bg-white text-black leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border border-gray-300 bg-white rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="query">
            Your Query
          </label>
          <textarea
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="shadow appearance-none border rounded border-gray-300 bg-white w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline h-32"
            placeholder="Type your query here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-white hover:bg-white text-yellow-600 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>

      <div className="lg:w-1/2 flex flex-col border-yellow-500 border-x-4 border-y-2 rounded-r-xl gap-5 p-4  lg:p-[135px]">
        <h2 className="text-2xl font-bold mb-6 text-black hidden  lg:hidden">Ask Your Query</h2>
        <p className="text-black">
          Looking for a perfect stay? Our hotel offers luxurious rooms, exquisite dining, and top-notch amenities.
          Whether it's for business or leisure, we ensure a memorable experience. Have any questions or special
          requests? Reach out to us today, and let us make your stay exceptional!
        </p>
        <h3 className="text-black">Contact : +91 9007062180</h3>

        <a href="/Booking">
          <button className=" rounded-lg justify-center border-yellow-400 w-44 border-solid p-2 text-xl bg-yellow-500 hidden lg:block">
            Book now
          </button>
        </a>
      </div>
    </div>
  );
}

export default Queries;
