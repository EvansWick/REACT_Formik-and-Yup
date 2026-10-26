import React from "react";
import RegistartionForm from "../../Components/RegistrationForm";

import styles from "./Registration.module.sass";
import classNames from "classnames/bind";

function Registration() {
  return (
    <div className={styles.page}>
      <h2 className={styles.formTitle}>Форма реєстрації</h2>
      <RegistartionForm />
    </div>
  );
}

export default Registration;
