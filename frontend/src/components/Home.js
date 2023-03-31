import Row from "../Row";
import React from "react";
import request from "../Request.js";

function Home() {
  return (
    <div>
      <Row image={request.image} />
    </div>
  );
}

export default Home;
