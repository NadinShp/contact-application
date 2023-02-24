import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Form/LoginForm";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import styles from "./Page.module.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate("/register", { replace: true });
  };
  return (
    <>
      <Header />
      <Container>
        <div className={styles.loginWrapper}>
          <LoginForm />
          <p className={styles.loginAddText}>
            If you don't register,
            <span className={styles.loginRedirectLink} onClick={handleBtnClick}>
              do it
            </span>
          </p>
        </div>
      </Container>
    </>
  );
};

export default LoginPage;
