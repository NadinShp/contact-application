import React from "react";
import { Contact } from "../../redux/contacts/interfaces";
import { useAppDispatch } from "../../hooks/hooks";
import { deleteContact } from "../../redux/contacts/thunk";
import { useContactContent } from "../../hooks/contactContext";
import styles from "./Contacts.module.css";

interface ContactItemProps {
  item: Contact;
}

const ContactItem = ({ item }: ContactItemProps) => {
  const { name, number, id } = item;
  const { contactToggleShowModal, token } = useContactContent();

  const dispatch = useAppDispatch();

  const handleDeleteContact = (id: string | null) => {
    const data = { id, token };
    dispatch(deleteContact(data));
  };
  return (
    <li className={styles.contactItem}>
      <div className={styles.contactInfo}>
        <span className={styles.contactName}>{name}:</span>
        <span>{number}</span>
      </div>
      <div className={styles.btnWrapper}>
        <button
          type="button"
          onClick={() => handleDeleteContact(id)}
          className={styles.btnActionDelete}
        >
          Delete
        </button>
        <button
          type="button"
          onClick={() => contactToggleShowModal(id)}
          className={styles.btnAction}
        >
          Change
        </button>
      </div>
    </li>
  );
};

export default ContactItem;
