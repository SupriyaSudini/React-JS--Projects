import React, {useState} from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function PhoneNumberValidation() {

    const [PhoneNumber, setPhoneNumber] =  useState('');
    const [valid, setValid] = useState(true);

    const handleChange =(value) => {
       setPhoneNumber(value);
       setValid(validatePhoneNumber(value));
    }

    const validatePhoneNumber = (phoneNumber) => {
         const phoneNumberPattern = /^\d{10}$/;
         return phoneNumberPattern.test(phoneNumber);
    }

  return (
    <div>
     <label>
        Phone Number:
        <PhoneInput
        country={'us'}
        value ={PhoneNumber}
        onChange ={handleChange}
        inputProps={{
            required:true
        }}/>

     </label>

     {! valid && <p style={{color:'red'}}>Please enter 10 digit number</p>}
    </div>
  )
}

export default PhoneNumberValidation;
