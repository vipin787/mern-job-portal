import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../components/InputForm";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/shared/Spinner";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {loading} = useSelector(state => state.alerts)

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      console.log(email, password);
      if(!email || !password) {
       return alert('Please Provide All Fields')
      }
      dispatch(showLoading())

      const {data} = await axios.post('/api/v1/auth/login', {
        email, password
      })
      dispatch(hideLoading());
      if(data.success) {
        localStorage.setItem('token', data.token)
        toast.success('Login Successfully');
        navigate('/dashboard')
      }
    } catch (error) {
      dispatch(hideLoading())
      toast.error('Invalid Credential Please Try Again!')
      console.log(error);
    }
  };

  return (
    <>
      {
        loading ? (<Spinner />) : (
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
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
        )
      }
    </>
  );
};

export default Login;
