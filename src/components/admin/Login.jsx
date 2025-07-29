import React from "react";
import { Formik, useFormik } from "formik";
import {signUpSchema} from "./schema"
const initialValues = {
  email: "",
  password: "",
};
const Login = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema:signUpSchema,
    onSubmit: (value) => {
      console.log(value);
    },
  });
  // console.log(Formik);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">
        <h2 className="mb-6 text-2xl font-semibold text-center">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="enter your email "
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="border w-full p-3 rounded-md "
          />{" "}
          <br />
          <br />
          <input
            type="password"
            placeholder="enter your password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full p-3 border rounded-md"
          />
          <br />
          <br />
          <button
            type="submit"
            className="bg-slate-700 p-3 w-40 text-white rounded-md hover:bg-slate-500 cursor-pointer mx-25"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
