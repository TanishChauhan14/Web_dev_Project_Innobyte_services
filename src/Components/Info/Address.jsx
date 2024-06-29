import React from 'react';

function Address() {
  return (
    <div className="text-white h-3/4 flex p-9 bg-[url(./assets/drive-download-20240615T053340Z-001/bg1.jpg)] bg-cover bg-center bg-fixed  justify-center items-center">
      <div className="text-center">
        <h1 className="text-7xl font-serif font-medium mb-4">
          Plan an Unforgettable Experience
        </h1>
        <h2 className="text-6xl flex justify-center gap-4 font-serif font-medium  mb-4">
          in <h2 className='text-yellow-500'>King Sukh</h2> Today!
        </h2>
        <p className="mb-8">
          We can help you fit your stay and experience within your allotted
          budget.
        </p>
        <address className="mb-4">
          <p className="font-semibold">Address:</p>
          <p>
            Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
          </p>
        </address>
        <p>Contact Us: +91 9007062180</p>
        <a href="/Booking">
          <button className="mt-6 px-4 py-2 rounded-lg border border-yellow-400 text-xl bg-yellow-500 hover:bg-yellow-600 transition duration-300">
            Book now
          </button>
        </a>
      </div>
    </div>
  );
}

export default Address;
