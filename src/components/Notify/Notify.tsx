import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import styles from "./Notify.module.css";

const Notify = () => {
  const [showNotification, setShowNotification] = useState<boolean>(false);

  let errorUser = useAppSelector((state) => state.user.error);
  let errorContacts = useAppSelector((state) => state.contacts.error);
  let error: string = errorUser || errorContacts;

  const delay = 5000;
  const toggleShowNotification = () => {
    setShowNotification(!showNotification);
  };
  useEffect(() => {
    let counter = setTimeout(() => {
      toggleShowNotification();
      return () => {
        clearTimeout(counter);
      };
    }, delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {!!error ? (
        <div className={styles.wrapper}>
          <div className={styles.notificationWrap}>
            <p className={styles.notificationText}>{error}</p>
          </div>
          <button type="button" className={styles.btnNotification} onClick={toggleShowNotification}>
            x
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Notify;
