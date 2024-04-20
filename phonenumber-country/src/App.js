import React from 'react';
import PhoneNumberValidation from './phoneNumberValidation';
import PhoneNumberSecond from './phoneNumberSecond';

function App() {
  return (
    <div>
      <h1 className='heading'>
        Phone Number Validation(react-phone-input-2) Example
      </h1>
     <PhoneNumberValidation></PhoneNumberValidation>

     <h1 className='heading'>
      Phone Number with react-phone-number-input
     </h1>
     <PhoneNumberSecond/>
    </div>
  );
}

export default App;
