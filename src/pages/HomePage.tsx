import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import styles from "./Home.module.css";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.thumb}>
            <div className={styles.homeWrapper}></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
