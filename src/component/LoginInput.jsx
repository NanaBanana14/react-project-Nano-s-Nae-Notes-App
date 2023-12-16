import React, { useState } from 'react';
import PropTypes from 'prop-types';

function LoginInput({ login }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    login(formData);
  };

  return (
    <form onSubmit={onSubmitHandler} className='login-input'>
      <input
        type="email"
        name="email"
        placeholder='Email'
        value={formData.email}
        onChange={onInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder='Password'
        value={formData.password}
        onChange={onInputChange}
      />
      <button>Masuk</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
