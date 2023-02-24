import React from "react";
import RegisterForm from "../components/Form/RegisterForm";
import Header from "../components/Header";
import styles from "./Page.module.css";

const RegisterPage = () => (
  <>
    <Header />
    <div className={styles.loginWrapper}>
      <RegisterForm />
    </div>
  </>
);
export default RegisterPage;
