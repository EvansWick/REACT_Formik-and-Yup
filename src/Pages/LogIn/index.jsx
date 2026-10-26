import React from "react";

import styles from "./LogIn.module.sass";
import classNames from "classnames/bind";
import LogInForm from "../../Components/LoginForm";

function LogIn(props) {
  return (
    <div className={styles.page}>
      <h2 className={styles.formTitle}>Ввійдіть в аккаунт</h2>
      <LogInForm />
    </div>
  );
}

export default LogIn;
