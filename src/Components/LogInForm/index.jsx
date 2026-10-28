import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import Input from '../Input';
import { LOGIN_SCHEMA } from '../../Schemas/Schemas.js';

import styles from './LogInForm.module.sass';
import { Link } from 'react-router-dom';

const initialValues = {
  login: '',
  password: '',
};

const classes = {};

function LogInForm (props) {
  const [isSubmiting, setIsSubmiting] = useState(false);

  function submithandle (values, FormikBag) {
    // console.log("Вхідні дані:", values);
    props.continueLogIn(values);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submithandle}
      validationSchema={LOGIN_SCHEMA}
    >
      <Form className={styles.form}>
        <Input
          labelName={`Ім'я користувача`}
          name='login'
          placeholder='userName'
          classes={classes}
          type='text'
        />
        <Input
          labelName={`Пароль`}
          name='password'
          placeholder='password'
          classes={classes}
          type='password'
        />
        <button
          className={styles.submitBtn}
          disabled={props.isSubmiting}
          type='submit'
        >
          Вхід
        </button>
        <p className={styles.goToReg}>
          Не маєте аккаунта? <Link to='/registration'>Зареєструйтесь</Link>
        </p>
      </Form>
    </Formik>
  );
}

export default LogInForm;
