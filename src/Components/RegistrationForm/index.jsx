import { Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import { REGISTRATION_SCHEMA } from "../../Schemas/Schemas.js";
import Input from "../Input/index.jsx";

import styles from "./RegistrationForm.module.sass";
import { useNavigate } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  nickName: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const classes = {};

function RegistartionForm() {
  const timeId = null;
  const navigate = useNavigate();
  function handleSubmit(values, FormikBag) {
    console.log("values :>> ", values);
    // console.log("FormikBag :>> ", FormikBag);
    timeId = setTimeout(() => navigate("/login"), 5000);
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeId);
    };
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={REGISTRATION_SCHEMA}
    >
      {(FormikProps) => {
        return (
          <Form className={styles.form}>
            <div className={styles.fullNameContainer}>
              <Input
                labelName={"Ім'я"}
                name={"firstName"}
                type={"text"}
                placeholder={`Ваше ім'я`}
                classes={classes}
              />
              <Input
                labelName={"Прізвище"}
                name={"lastName"}
                type={"text"}
                placeholder={`Ваше прізвище`}
                classes={classes}
              />
            </div>
            <Input
              labelName={"Ім'я користувача"}
              name={"nickName"}
              type={"text"}
              placeholder={`userName`}
              classes={classes}
            />
            <Input
              labelName={"Пошта"}
              name={"email"}
              type={"email"}
              placeholder={`example@gmail.com`}
              classes={classes}
            />
            <Input
              labelName={"Телефон"}
              name={"phone"}
              type={"tel"}
              placeholder={`+380123456789`}
              classes={classes}
            />
            <Input
              labelName={"Пароль"}
              name={"password"}
              type={"password"}
              placeholder={`Your21Pass@wrd`}
              classes={classes}
            />
            <Input
              labelName={"Перевірка паролю"}
              name={"confirmPassword"}
              type={"password"}
              placeholder={`Your21Pass@wrd`}
              classes={classes}
            />

            <button type="submit">Reg</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegistartionForm;
