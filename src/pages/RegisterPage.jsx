import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../component/RegisterInput';
import { register } from '../utils/api';
import LoadingIndicator from '../component/LoadingIndicator';

function RegisterPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onRegisterHandler = async (user) => {
    setLoading(true);

    const { error } = await register(user);

    if (!error) {
      navigate('/');
    }

    setLoading(false); 
  };

  return (
    <section className='register-page'>
      <h2>Ayo isi datamu...</h2>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <RegisterInput register={onRegisterHandler} />
      )}
      <p>Kembali ke <Link to="/">Masuk</Link></p>
    </section>
  );
}

export default RegisterPage;
