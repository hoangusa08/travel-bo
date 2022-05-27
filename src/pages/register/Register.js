import React from "react";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import "./Register.scss";
import { ListFea } from "./data";

export default function Register() {
  return (
    <AuthLayout>
      <div className="register">
        <div>Register</div>
        {ListFea.map((fea) => (
          <Input {...fea} />
        ))}
      </div>
    </AuthLayout>
  );
}

const Input = (props) => {
  return (
    <div>
      <div>
        <span>{props.title}</span>
      </div>
      <div>
        <input placeholder={props.placeholder} />
      </div>
    </div>
  );
};
