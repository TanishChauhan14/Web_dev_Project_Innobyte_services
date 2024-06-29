import React from 'react';
import Para from '../Components/About/Para';
import ACollaege from '../Components/About/ACollaege';

function Page2() {
  return (
    <div className='Page2 flex flex-col items-center justify-center p-4 md:flex-row md:justify-around md:p-4 lg:p-4'>
      <Para />
      <ACollaege />
    </div>
  );
}

export default Page2;
