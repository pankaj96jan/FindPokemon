import React from "react";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import { Image } from "@mui/icons-material";

const Button = () => {
  const [user, setUser] = useState({});
  const [toggle, setToggle] = useState(false);
  const handleCredentialResponse = (response) => {
    const userObj = jwt_decode(response.credential);
    setUser(userObj);
  };

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id:
        "90218340677-0kdkmophr7a7k977rdraktuh067r8f1v.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    window.google.accounts.id.renderButton(
      document.getElementById("SignInButton"),
      { theme: "outline", size: "large" }
    );
  }, [user]);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleSignOut = () => {
    setUser({})
    setToggle(!toggle);

  }

  return (
    <div>
      {Object.keys(user).length === 0 && (
        <div className="" id="SignInButton"></div>
      )}
      {Object.keys(user).length > 0 && (
        <div>
          <img
            onClick={handleToggle}
            className="avatar"
            src={user.picture}
            alt="pnkj"
          />
        </div>
      )}
      {toggle && (
        <span className="user_name_email">
          {user.name}<br />
          {user.email}
          <div><button className="sign_out_button" onClick={handleSignOut}>signOut</button></div>
        </span>
      )}
    </div>
  );
};
export default Button;
