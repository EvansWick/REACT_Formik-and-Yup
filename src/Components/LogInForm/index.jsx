import { Form, Formik } from "formik";
import React from "react";
import Input from "../Input";
import { LOGIN_SCHEMA } from "../../Schemas/Schemas.js";

import styles from "./LogInForm.module.sass";

const initialValues = {
  login: "",
  password: "",
};

const classes = {};

function submithandle(values, FormikBag) {}

function LogInForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submithandle}
      validationSchema={LOGIN_SCHEMA}
    >
      <Form>
        <Input
          labelName={`Ім'я користувача`}
          name="login"
          placeholder="nickName"
          classes={classes}
          type="text"
        />
        <Input
          labelName={`Пароль`}
          name="password"
          placeholder="your password"
          classes={classes}
          type="password"
        />
      </Form>
    </Formik>
  );
}

export default LogInForm;
