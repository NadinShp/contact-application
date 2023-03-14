import styles from "./Notify.module.css";

interface NotifyProps {
  text: string | null | undefined;
  closeNotify: () => void;
}

const Notify = ({ text, closeNotify }: NotifyProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.notificationWrap}>
        <p className={styles.notificationText}>{text}</p>
      </div>
      <button type="button" className={styles.btnNotification} onClick={() => closeNotify()}>
        x
      </button>
    </div>
  );
};

export default Notify;
