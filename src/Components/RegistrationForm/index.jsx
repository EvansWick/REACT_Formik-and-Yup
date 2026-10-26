import { Field, Form, Formik } from "formik";
import React from "react";
import { REGISTRATION_SCHEMA } from "./Schemas.js";
import Input from "../Input/index.jsx";

const initialValues = {
  firstName: "",
  lastName: "",
  nickName: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function handleSubmit(values, FormikBag) {
  console.log("values :>> ", values);
  console.log("FormikBag :>> ", FormikBag);
}

function RegistartionForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={REGISTRATION_SCHEMA}
    >
      {(FormikProps) => {
        return (
          <Form>
            <Input />
            <label>
              <span>Name:</span>
              <Field name="firstName">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => {
                  //   console.log("touched :>> ", touched);
                  //   console.log("errors :>> ", errors);
                  //   console.log("meta :>> ", meta);
                  //   console.log("field :>> ", field);
                  return (
                    <div>
                      <input type="text" placeholder="your name" {...field} />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </div>
                  );
                }}
              </Field>
            </label>
            <button type="submit">Reg</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegistartionForm;
