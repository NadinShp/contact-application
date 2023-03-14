import React from "react";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/hooks";
import { getLogin } from "../../../redux/user/thunk";
import { userSchema, User } from "./userSchema";
import FormGroupe from "../FormGroupe";
import "../Form.scss";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const startValues = {
    email: "",
    password: "",
  };
  return (
    <div className="formWrapper">
      <Formik
        initialValues={startValues}
        onSubmit={async (values: User, { resetForm }) => {
          const answer = await dispatch(getLogin(values));
          if (getLogin.fulfilled.match(answer)) {
            const user = answer.payload;
            localStorage.setItem("user", JSON.stringify(user));
            resetForm();
            navigate("/contacts");
          }
        }}
        validationSchema={userSchema}
      >
        {({ touched, errors, values, handleSubmit, handleChange, handleBlur, dirty, isValid }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroupe
              name="email"
              type="email"
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors.email}
              touched={touched.email}
              values={values.email}
            />
            <FormGroupe
              name="password"
              type="password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors.password}
              touched={touched.password}
              values={values.password}
            />
            <Button
              variant="primary"
              type="submit"
              className="btn btn-success"
              disabled={!(isValid && dirty)}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default LoginForm;
