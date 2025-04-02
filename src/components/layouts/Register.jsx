import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Elements/Button";
import InputForm from "../Elements/InputForm";
import Foot from "../Elements/FootEleemennt";
import FooterAuth from "../Elements/FooterAuth";

const Register = () => {
  const [hidePassword, setHidePassword] = useState(false);
  const [formData, setFormdata] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState(null);

  const navgiate = useNavigate();

  //   handle isi form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formData, [name]: value });
    // console.log(formData);
  };

  const handleSubmited = (e) => {
    e.preventDefault();

    // validasi form tidak boleh kosong
    if (!formData.username || !formData.password) {
      setError("Form tidak boleh kosong");
      return;
    }
    // simpan data di local storage
    localStorage.setItem("user", JSON.stringify(formData));
    console.log("isi form", formData);

    // redirect ke home
    navgiate("/login");
    //reset form
    setFormdata({ username: "", password: "", email: "" });
  };

  //   feature hide password
  const handleHidePassword = () => {
    setHidePassword(!hidePassword);
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-blue-400">
      <div className="flex flex-col bg-gray-600 rounded-md shadow-lg p-6 items-center">
        <div className="text-center text-2xl py-2 font-semibold">
          <h2 className="text-white">Register</h2>
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-2">
          <InputForm
            tittle={"Username"}
            error={error}
            field={{
              id: "username",
              name: "username",
              value: formData.username,
              onChange: handleChange,
              type: "text",
              placeholder: "Masukkan username",
            }}
          />
          <InputForm
            tittle={"Email"}
            error={error}
            field={{
              id: "email",
              name: "email",
              value: formData.email,
              onChange: handleChange,
              type: "email",
              placeholder: "Masukkan email",
            }}
          />
          <InputForm
            tittle={"Password"}
            error={error}
            field={{
              id: "password",
              name: "password",
              value: formData.password,
              onChange: handleChange,
              type: hidePassword ? "password" : "text",
              placeholder: "Masukkan password",
            }}
          />
        </div>

        <Button
          onClick={handleHidePassword}
          Class={"bg-blue-500 text-white hover:bg-blue-600 justify-center"}
          ClassDiv={"w-full justify-center mt-4"}
        >
          {hidePassword ? "Show Password" : "Hide Password"}
        </Button>

        <div className="flex items-center justify-center p-2">
          <Button
            className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            onClick={handleSubmited}
            Class={
              " justify-center bg-blue-500 hover:bg-blue-600 p-4 text-white"
            }
          >
            Register
          </Button>
        </div>
       <FooterAuth isLogin={false} />
      </div>
    </div>
  );
};

export default Register
