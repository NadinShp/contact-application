import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import ContactForm from "../components/Form/ContactForm";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { getAllContacts } from "../redux/contacts/thunk";
import Contacts from "../components/Contacts";
import { Contact } from "../redux/contacts/interfaces";
import { ContactContent } from "../hooks/contactContext";
import ChangeContactForm from "../components/Form/ChangeContactForm";
import Container from "../components/Container";
import Header from "../components/Header";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [chosenContact, setChosenContact] = useState<Contact>({ id: null, name: "", number: "" });
  const [filter, setFilter] = useState<string>("");

  const token = useAppSelector((state) => state.user.user.token);

  const dispatch = useAppDispatch();
  let contacts = useAppSelector((state) => state.contacts.contacts);

  useEffect(() => {
    if (!!token) {
      dispatch(getAllContacts(token));
    }
  }, [dispatch, token]);

  const contactToggleShowModal = (contactId: string | null) => {
    if (!!contactId) {
      const currentContact = contacts.find(({ id }) => id === contactId);
      if (currentContact) {
        const { id, name, number } = currentContact;
        setChosenContact((prevState) => ({ ...prevState, id, name, number }));
      }
    }
    if (!contactId) {
      setChosenContact((prevState) => ({ ...prevState, id: null }));
    }
    setShowModal(!showModal);
  };
  const toggleShowModal = () => {
    setShowModal(!showModal);
  };
  const getFilterValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value);
  };
  function getFilteredContacts() {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  }
  const handleAddContact = () => {
    setChosenContact((prevState) => ({ ...prevState, id: null }));
    toggleShowModal();
  };
  return (
    <ContactContent.Provider value={{ contactToggleShowModal, token }}>
      <Header token={token} />
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.filterBtnWrapper}>
            <button onClick={handleAddContact} type="button" className={styles.btn}>
              AddContact
            </button>
            <input
              type="text"
              name="filter"
              value={filter}
              onChange={getFilterValue}
              className={styles.input}
              placeholder="Filter contacts"
            />
          </div>
          {contacts.length > 0 ? (
            <Contacts list={getFilteredContacts()} />
          ) : (
            <p className={styles.text}>You currently have no contacts. You can add them.</p>
          )}
          {showModal ? (
            <Modal handleBtnClick={toggleShowModal}>
              {!chosenContact.id ? (
                <ContactForm closeModal={contactToggleShowModal} />
              ) : (
                <ChangeContactForm
                  contact={chosenContact}
                  closeModal={contactToggleShowModal}
                  token={token}
                />
              )}
            </Modal>
          ) : null}
        </div>
      </Container>
    </ContactContent.Provider>
  );
};

export default ContactsPage;
