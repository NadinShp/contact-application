import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { signUp } from "../../../redux/user/thunk";
import { useAppDispatch } from "../../../hooks/hooks";
import FormGroupe from "../FormGroupe";
import { formDataInterface } from "./interface";
import { userSchema } from "./userSchema";
import "../Form.scss";

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="formWrapper">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={userSchema}
        onSubmit={async (values: formDataInterface, { resetForm }) => {
          const res = await dispatch(signUp(values));
          if (res) navigate("/login");
          resetForm();
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit, handleBlur, isValid, dirty }) => (
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
            <Button
              variant="primary"
              type="submit"
              className="btn btn-success"
              disabled={!(isValid && dirty)}
            >
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
