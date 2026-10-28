import React, { useEffect, useState } from 'react';

import styles from './LogIn.module.sass';
import classNames from 'classnames/bind';
import LogInForm from '../../Components/LogInForm';
import { Link, useNavigate } from 'react-router-dom';

function LogIn (props) {
  const timeId = null;
  const navigate = useNavigate();
  const [isSubmiting, setIsSubmiting] = useState(false);

  // Функція після входу в аккаунт
  const continueLogIn = values => {
    setIsSubmiting(true);
    console.log('Entering... Values:', values);

    if (
      localStorage.getItem('login') === values.login &&
      localStorage.getItem('password') === values.password
    ) {
      console.log('Auth changed');
      props.setIsAuth(true);
      timeId = setTimeout(() => navigate('/'), 3000);
      return;
    }
    console.log('Невірний логін або пароль');
    setIsSubmiting(false);
  };

  useEffect(() => {
    return () => clearTimeout(timeId);
  }, []);

  return (
    <div className={styles.page}>
      <h2 className={styles.formTitle}>Ввійдіть в аккаунт</h2>
      <LogInForm continueLogIn={continueLogIn} isSubmiting={isSubmiting} />
    </div>
  );
}

export default LogIn;
