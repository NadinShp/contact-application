import React from "react";
import { Contact } from "../../redux/contacts/interfaces";
import ContactItem from "./ContactItem";
import styles from "./Contacts.module.css";

interface ContactsProps {
  list: Contact[];
}

const Contacts = ({ list }: ContactsProps) => (
  <div className={styles.wrapperContacts}>
    <ul className={styles.contactList}>
      {list.map((contact) => (
        <ContactItem key={contact.id} item={contact} />
      ))}
    </ul>
  </div>
);

export default Contacts;
