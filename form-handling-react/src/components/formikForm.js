import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Form submitted:", values);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>Username:
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="p" className="error" />
          </label>

          <label>Email:
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="p" className="error" />
          </label>

          <label>Password:
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="p" className="error" />
          </label>

          <button type="submit" disabled={isSubmitting}>Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
