import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("e", e);
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const json = await response.json();
    // console.log(json);
    localStorage.setItem("authToken", json.users._id);

    if (json.users.name === credentials.name) {
      // yha change kr lio bsnl
      // Save the auth token and redirect
      localStorage.setItem("authToken", json.users._id);
      // console.log(json.users._id);
      navigate("/login");
    } else {
      alert("Invalid credentials");
      // console.log(json.users._id);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    // console.log(credentials.name);
  };
  return (
    <div className="container w-50">
      <h1 className="m-2 text-center">SignUp Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group my-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            onChange={onChange}
            name="name"
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
            name="email"
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            name="password"
            onChange={onChange}
            required={true}
            minLength={5}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            placeholder="Confirm Password"
            name="cpassword"
            onChange={onChange}
            required={true}
            minLength={5}
          />
        </div>
        <button type="submit" className="my-3 btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
