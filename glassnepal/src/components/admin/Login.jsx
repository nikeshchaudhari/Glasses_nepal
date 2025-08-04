import React, { useEffect } from "react";
import { Formik, useFormik } from "formik";
import { loginSchema } from "../admin/schema";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const initialValues = {
  email: "",
  password: "",
};
const Login = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    const token = localStorage.getItem("token")
     if (token) {
    navigate("/dashboard");
  }

  },[navigate])
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: async (value) => {
        try {
          const response = await axios.post(
            "http://localhost:4080/user/login",
            value
          );
          console.log(response.data);

          localStorage.setItem("token", response.data.token);

          toast.success("Login Sucessfully..");
          navigate("/dashboard");
        } catch (err) {
          console.error("Error during login:", err);
          toast.error("Login invalid!");
        }
      },
    });
  // console.log(Formik);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">
        <h2 className="mb-6 text-2xl font-semibold text-center">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="enter your email "
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border w-full p-3 rounded-md "
            />
            {errors.email && touched.email ? (
              <p className="text-red-700">{errors.email}</p>
            ) : null}{" "}
          </div>
          <br />

          <div>
            <input
              type="password"
              placeholder="enter your password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full p-3 border rounded-md"
            />
            {errors.password && touched.password ? (
              <p className="text-red-700">{errors.password}</p>
            ) : null}{" "}
          </div>

          <br />
          <button
            type="submit"
            className="bg-slate-700 p-3 w-40 text-white rounded-md hover:bg-slate-500 cursor-pointer mx-25"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
