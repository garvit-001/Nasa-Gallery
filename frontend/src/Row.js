// import images from "./request";
import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

function Row({ image }) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      function fetchUserData() {
        fetch(image)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setUsers(data);
          });
      }
      fetchUserData();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [image]);

  return (
    <div className="container">
      <h1>{users.title}</h1>
      <img src={users.url} alt="" />
      <h2>NASA Astronomy Picture of the day {users.date}</h2>
      <h4> {users.explanation}</h4>
    </div>
  );
}

export default Row;
