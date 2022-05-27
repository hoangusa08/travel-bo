import React from "react";
import { Link } from "react-router-dom";
import "./AuthLayout.scss";

const AuthLayout = (props) => {
  return (
    <div className="auth-layout">
      <div className="left">
        <div className="item">
          <div>Welcome to travel Viet Nam</div>
          <Link>Register to Provider tour</Link>
        </div>
      </div>
      <div className="right">{props.children}</div>
    </div>
  );
};

export default AuthLayout;
