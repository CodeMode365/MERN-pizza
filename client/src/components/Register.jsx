import React, { useState } from "react";

const Register = () => {
  const [Password, setPassword] = useState("");
  const [C_Password, setC_Password] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  const Login = () => {
    if (Name != "" && Email != "" && C_Password != "" && Password != "") {
      if (Password !== C_Password) {
        alert("Passwords not matched");
      }
    } else {
      alert("All fields are required");
    }
  };
  return (
    <div className="loginEle">
      <div className="row justify-content-center">
        <div className="col-md-5 mt-5">
          <div className="bg-dark login rounded-4">
            <h2 className="text-light w-100 text-center">Login</h2>
            <input
              type="text"
              placeholder="Username"
              className="form-control"
              value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <input
              type="email"
              placeholder="email"
              className="form-control"
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <input
              type="password"
              placeholder="password"
              className="form-control"
              value={Password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="form-control"
              value={C_Password}
              onChange={(e) => {
                setC_Password(e.target.value);
              }}
              required
            />
            <button
              type="submit"
              className="btn-danger btn mt-4 w-25 ms-auto"
              onClick={Login}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
