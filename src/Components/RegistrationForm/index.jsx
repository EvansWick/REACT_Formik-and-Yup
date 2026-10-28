import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { REGISTRATION_SCHEMA } from '../../Schemas/Schemas.js';
import Input from '../Input/index.jsx';

import styles from './RegistrationForm.module.sass';
import { Link, useNavigate } from 'react-router-dom';

const initialValues = {
  firstName: '',
  lastName: '',
  nickName: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function RegistartionForm (props) {
  const timeId = null;
  const [isSubmiting, setIsSubmiting] = useState(false);

  const navigate = useNavigate();
  function handleSubmit (values, FormikBag) {
    console.log('values :>> ', values);
    setIsSubmiting(true);
    localStorage.setItem('login', values.nickName);
    localStorage.setItem('password', values.password);
    timeId = setTimeout(() => navigate('/login'), 3000);
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeId);
      setIsSubmiting(false);
    };
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={REGISTRATION_SCHEMA}
    >
      {FormikProps => {
        return (
          <Form className={styles.form}>
            <div className={styles.fullNameContainer}>
              <Input
                labelName={"Ім'я"}
                name={'firstName'}
                type={'text'}
                placeholder={`Ваше ім'я`}
              />
              <Input
                labelName={'Прізвище'}
                name={'lastName'}
                type={'text'}
                placeholder={`Ваше прізвище`}
              />
            </div>
            <Input
              labelName={"Ім'я користувача"}
              name={'nickName'}
              type={'text'}
              placeholder={`userName`}
            />
            <Input
              labelName={'Пошта'}
              name={'email'}
              type={'email'}
              placeholder={`example@gmail.com`}
            />
            <Input
              labelName={'Телефон'}
              name={'phone'}
              type={'tel'}
              placeholder={`+380123456789`}
            />
            <Input
              labelName={'Пароль'}
              name={'password'}
              type={'password'}
              placeholder={`Your21Pass@wrd`}
            />
            <Input
              labelName={'Перевірка паролю'}
              name={'confirmPassword'}
              type={'password'}
              placeholder={`Your21Pass@wrd`}
            />

            <button
              disabled={isSubmiting}
              className={styles.submitBtn}
              type='submit'
            >
              Реєстрація
            </button>
            {/* Чомусь не хочу ставати по центру */}
            <p className={styles.goToReg}>
              Вже маєте аккаунт? <Link to='/login'>Увійдіть</Link>
            </p>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegistartionForm;
