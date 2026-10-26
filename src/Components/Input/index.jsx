import { Field } from "formik";
import React from "react";

function Input({ labelName, name, classes, ...inputProps }) {
  return (
    <label>
      <span>{labelName}</span>
      <Field name={name}>
        {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
        }) => {
          return (
            <div>
              <input {...inputProps} {...field} />
              {meta.touched && meta.error && (
                <div className="error">{meta.error}</div>
              )}
            </div>
          );
        }}
      </Field>
    </label>
  );
}

export default Input;
