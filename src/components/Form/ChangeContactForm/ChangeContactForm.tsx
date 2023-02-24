import React from "react";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import { useAppDispatch } from "../../../hooks/hooks";
import FormGroupe from "../FormGroupe";
import { changeContact } from "../../../redux/contacts/thunk";
import { ChangeContact, changeContactSchema, ChangeContactInterface } from "./changeContactSchema";

const ChangeContactForm = ({ contact, closeModal, token }: ChangeContactInterface) => {
  const { id, name, number } = contact;
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={{ name, number }}
      onSubmit={(values: ChangeContact, { resetForm }) => {
        const data = { ...values, id, token };
        dispatch(changeContact(data));
        closeModal(null);
        resetForm();
      }}
      validationSchema={changeContactSchema}
    >
      {({ touched, errors, values, handleSubmit, handleChange, handleBlur }) => (
        <Form onSubmit={handleSubmit}>
          <FormGroupe
            name="name"
            type="text"
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors.name}
            touched={touched.name}
            values={values.name}
          />
          <FormGroupe
            name="number"
            type="text"
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors.number}
            touched={touched.number}
            values={values.number}
          />
          <Button variant="primary" type="submit">
            Change contact
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ChangeContactForm;
