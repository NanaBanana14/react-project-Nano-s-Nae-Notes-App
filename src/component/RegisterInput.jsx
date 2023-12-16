import React, { useState } from 'react';
import PropTypes from 'prop-types';

function RegisterInput({ register }) {
  const [formData, setFormData] = useState({
    name: '',
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
    register(formData);
  };

  return (
    <form onSubmit={onSubmitHandler} className='register-input'>
      <input
        type="text"
        name="name"
        placeholder="Nama"
        value={formData.name}
        onChange={onInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={onInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        autoComplete='current-password'
        value={formData.password}
        onChange={onInputChange}
      />
      <button>Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
