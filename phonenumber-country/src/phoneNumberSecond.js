import React,{useState} from 'react'
import PhoneInput, {isValidPhoneNumber} from 'react-phone-number-input';
import "./phoneNumberSecond.css";
import "react-phone-number-input/style.css";




const PhoneNumberSecond = () => {

  const [value, setValue] = useState();
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };


  return (
    <div className='p'>
      <PhoneInput  
      defaultCountry='US'
      value={value}
      onChange={value => setValue(value)}
      onFocus={handleFocus}
      error={(focused && value) ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone') : 'Phone number required'}
      />
      <span style={{ color: 'red' }}>
                  {value && !isValidPhoneNumber(value) ? 'Invalid Phone Number': ''}
      </span>
    </div>

  )
}

export default PhoneNumberSecond;
