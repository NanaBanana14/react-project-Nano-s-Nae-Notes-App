// LoginPage.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginInput from '../component/LoginInput';
import { login } from '../utils/api';

function LoginPage({ loginSuccess }) {
  const navigate = useNavigate();

  const onLoginHandler = async ({ email, password }) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  };

  return (
    <section className='login-page'>
      <h2>Silakan masuk untuk melanjutkan ...</h2>
      <LoginInput login={onLoginHandler} />
      <p>Belum punya akun? <Link to="/register">Daftar di sini.</Link></p>
    </section>
  );
}

export default LoginPage;
