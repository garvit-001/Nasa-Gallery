import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
// import Home from "./Home";
function Google() {
  const navigate = useNavigate();
  return (
    <div>
      <GoogleOAuthProvider clientId="158478109976-c6tpta17f68j71tcdesb2ad8ahucgkco.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const details = jwt_decode(credentialResponse.credential);
            console.log(details);
            console.log("logged in");
            navigate("/");
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        {/* <GoogleLogout
          onSuccess={(credentialResponse) => {
            const details = jwt_decode(credentialResponse.credential);
            console.log(details);
            console.log("logged in");
            navigate("/login");
          }}
          onError={() => {
            console.log("Login Failed");
          }} */}
        {/* /> */}
      </GoogleOAuthProvider>
    </div>
  );
}

export default Google;
