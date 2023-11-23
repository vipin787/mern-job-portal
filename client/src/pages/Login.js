import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputForm from "../components/InputForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="form-container">
        <form className="card p-2" onSubmit={handleSubmit}>
          <img
            src="/assets/images/logo/logo.png"
            alt=""
            height={150}
            width={400}
          />

          <InputForm
            htmlFor="email"
            labelText={"Email"}
            type={"email"}
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <InputForm
            htmlFor="password"
            labelText={"Password"}
            type={"password"}
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
            name="password"
          />

          {/* <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input type="text" className="form-control" name="location" />
          </div> */}
          <div className="d-flex justify-content-end">
            <p>
            Not a User <Link to="/register">Register Here</Link>
            </p>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
