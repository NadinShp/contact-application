import { Formik } from "formik";
import { redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { signUp } from "../../../redux/user/thunk";
import { useAppDispatch } from "../../../hooks/hooks";
import FormGroupe from "../FormGroupe";
import { formDataInterface } from "./interface";
import { userSchema } from "./userSchema";
import "../Form.scss";

const RegisterForm = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="formWrapper">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={userSchema}
        onSubmit={(values: formDataInterface) => {
          dispatch(signUp(values));
          redirect("/login");
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => (
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
            <Button type="submit" variant="primary">
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
