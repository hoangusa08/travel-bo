import React from "react";
import AuthBanner from "../../components/AuthBanner/AuthBanner";
import "./AuthLayout.scss";

const AuthLayout = (props) => {
  return (
    <>
      <div className="auth-layout">
        <div className="row">
          <div className="col-md-6 ">
            <AuthBanner />
          </div>
          <div className="col-md-6 auth-main">{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
