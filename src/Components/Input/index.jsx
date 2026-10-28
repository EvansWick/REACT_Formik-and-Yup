import { Field } from 'formik';
import classNames from 'classnames';

import styles from './Input.module.sass';

function Input ({ labelName, name, classes, ...inputProps }) {
  return (
    <label className={styles.row}>
      <span className={styles.labelText}>{labelName}</span>
      <Field name={name}>
        {({
          field, // { name, value, onChange, onBlur }
          meta,
        }) => {
          // console.log("labelText:", classes.labeltext);
          return (
            <div className={styles.inputContainer}>
              <input {...inputProps} {...field} className={styles.input} />
              {meta.touched && meta.error && (
                <div className={styles.error}>{meta.error}</div>
              )}
            </div>
          );
        }}
      </Field>
    </label>
  );
}

export default Input;
