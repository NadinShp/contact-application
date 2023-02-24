import React from "react";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { addContact } from "../../../redux/contacts/thunk";
import { contactSchema, Contact, ContactFormProps } from "./contactSchema";
import FormGroupe from "../FormGroupe";

const ContactForm = ({ closeModal }: ContactFormProps) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.user.user.token);
  const contacts = useAppSelector((state) => state.contacts.contacts);
  const startValues = {
    name: "",
    number: "",
  };
  return (
    <div>
      <Formik
        initialValues={startValues}
        onSubmit={(values: Contact) => {
          const { name } = values;
          const existContact = contacts.find((contact) => contact.name === name);
          if (existContact) {
            //Need to add alert with errors in order to replace console.log
            console.log("Contact with such name is exist");
          } else {
            const data = { ...values, token };
            dispatch(addContact(data));
            closeModal(null);
          }
        }}
        validationSchema={contactSchema}
      >
        {({ touched, errors, values, handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroupe
              name="name"
              type="text"
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values.name}
              errors={errors.name}
              touched={touched.name}
            />
            <FormGroupe
              name="number"
              type="number"
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values.number}
              errors={errors.number}
              touched={touched.number}
            />
            <Button variant="primary" type="submit">
              Add contact
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
