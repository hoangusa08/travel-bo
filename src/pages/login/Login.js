import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";

import FormLogin from "./FormLogin/FormLogin";
import { pushToast } from "components/Toast";
import "./Login.scss";

const Login = () => {
  const location = useLocation();
  useEffect(() => {
    pushToast("success", location.state?.successful);
  }, [location]);
  return (
    <AuthLayout>
      <div className="login-wrapper">
        <h2 className="login-title">Log In</h2>
        <p>Hello and welcome !</p>
        <div className="login-form">
          <FormLogin />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;