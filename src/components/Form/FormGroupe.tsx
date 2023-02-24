import React from "react";
import { Form } from "react-bootstrap";
import "./Form.scss";

interface FormGroupeProps {
  name: string;
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  errors: string | undefined;
  touched: boolean | undefined;
  values: string | undefined;
}

const FormGroupe = ({
  name,
  type,
  handleChange,
  handleBlur,
  errors,
  touched,
  values,
}: FormGroupeProps) => (
  <Form.Group className="mb-3">
    <Form.Label>{name}</Form.Label>
    <Form.Control
      type={type}
      placeholder={`Enter ${name}`}
      value={values}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      autoComplete="false"
    ></Form.Control>
    <Form.Text>
      <p className="errorText">{errors && touched ? errors : null}</p>
    </Form.Text>
  </Form.Group>
);

export default FormGroupe;
