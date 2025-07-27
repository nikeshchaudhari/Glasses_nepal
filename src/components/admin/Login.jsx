import React from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = () =>
  Yup.object().shape({
    email: Yup.string().email("Invalid Email..").required("Email is required"),
    password: Yup.string()
      .min(8, "password must be at least 8 character")
      .required("Password is required"),
  });
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log("Form Data :", data);
    alert("login sucessfully...");
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      
      >
        <div className="flex items-center justify-center w-full mx-auto  h-screen">
          <div className="w-[350px] md:w-[500px] min-h-80 text-center p-5 border rounded-2xl ">
            <h2 className="py-5 text-[25px] font-semibold">Admin Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="enter your email"
                  className="bg-white w-full p-3  rounded-sm border-[1px] outline-black/50"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <br />
              <div>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="enter your password"
                  className="bg-white w-full p-3 rounded-sm border-1 outline-black/50"
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
              </div>
              <button type="submit" className=" p-3 bg-green-600 text-white mt-5 w-40 rounded-sm hover:bg-gradient-to-r from-green-300 to-green-600  cursor-pointer transition hover:duration-700">
                Login
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Login;
