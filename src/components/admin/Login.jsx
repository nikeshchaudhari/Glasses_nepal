import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup"

const schema = Yup.object().shape({
email : Yup.string().required("email is required"),
password :Yup.string().required("password is required..")
});
const Login = () => {
  const{login,handleSubmit,formState:{errors},}=useForm({resolver:})
  

  }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md  w-[500px]  h-80" >
          <form action="">
              <h2 className="text-center mb-5 text-[30px] font-semibold">Admin Login</h2>
          <input
            type="text"
            name="email"
            id=""
            placeholder="enter your email"
            className="border-1 w-full p-3 rounded-sm"
          />{" "}
          <br />
          <br />
          <input type="password" placeholder="enter your password"  className="border-1 w-full p-3 rounded-sm"/>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
