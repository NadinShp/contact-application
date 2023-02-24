import React, { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  handleBtnClick: () => void;
}

const modalRef = document.getElementById("forModal") as HTMLElement;

const Modal = ({ children, handleBtnClick }: ModalProps) => {
  const handleESCBtn = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        handleBtnClick();
      }
    },
    [handleBtnClick]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleESCBtn);
    return () => {
      document.removeEventListener("keydown", handleESCBtn);
    };
  }, [handleESCBtn]);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleBtnClick();
    }
  };
  return createPortal(
    <div className={styles.wrapper} onClick={handleBackgroundClick}>
      <div className={styles.modalWrapper}>
        <button type="button" onClick={handleBtnClick} className={styles.modalBtn}>
          x
        </button>
        <div className={styles.modal}>{children}</div>
      </div>
    </div>,
    modalRef
  );
};

export default Modal;
