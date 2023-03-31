import "./App.css";
import Home from "./components/Home";
// import request from "./Request";
// import Row from "./Row";
import Nav from "./Nav";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        {/* <Navbar /> */}
        {/* <Alert message={"success"} /> */}
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// const API_KEY = "7mC6LsHiMqLOvyaz0TQT0YS2aaRVKAuPvsNP4YJ5";

// const App = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUserData();
//     async function fetchUserData() {
//       fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
//         .then((response) => {
//           return response.json();
//         })
//         .then((data) => {
//           setUsers(data);
//         });
//     }
//   }, []);

//   return (
//     <div className="App">
//       <Nav />
//       <img src={users.url} alt="" />
//     </div>
//   );
// };

// export default App;
