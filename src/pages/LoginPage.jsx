import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginInput from '../component/LoginInput';
import { login } from '../utils/api';
import LoadingIndicator from '../component/LoadingIndicator';

function LoginPage({ loginSuccess }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onLoginHandler = async ({ email, password }) => {
    try {
      setLoading(true);

      const { error, data } = await login({ email, password });

      if (!error) {
        loginSuccess(data);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='login-page'>
      <h2>Silakan masuk untuk melanjutkan ...</h2>
      <LoginInput login={onLoginHandler} />
      <p>Belum punya akun? <Link to="/register">Daftar di sini.</Link></p>

      {loading && <LoadingIndicator />}
    </section>
  );
}

export default LoginPage;
