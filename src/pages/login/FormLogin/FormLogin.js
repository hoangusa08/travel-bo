import { React, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/user";
import { USER_ROLE } from "../../../core/constants";
import Loading from "../../../components/Loading/Loading";

function FormLogin() {
  const userStore = useSelector((state) => state.user.user);
  const isLoading = useSelector((state) => state.user.loading);
  const rememberMe = localStorage.getItem("rememberMe")
    ? JSON.parse(localStorage.getItem("rememberMe"))
    : null;

  const [user] = useState(userStore);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const dispatch = useDispatch();

  let history = useHistory();
  useEffect(() => {
    if (user?.isEnable && user?.email) {
      if (user.roles[0] === USER_ROLE.DEVELOP) {
        history.push("/my-projects");
      } else {
        history.push("/manage-projects");
      }
      return;
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      email: rememberMe?.isRemember ? rememberMe.email : "",
      password: rememberMe?.isRemember ? rememberMe.password : "",
      isRemember: rememberMe?.isRemember ? rememberMe.isRemember : false
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .min(5, "Minimum 5 characters")
        .required("Required!"),
      isRemember: Yup.bool()
    }),
    onSubmit: (values) => {
      dispatch(login(values));
    }
  });
  const touched = formik.touched;
  const error = formik.errors;
  const values = formik.values;

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Loading visible={isLoading} />
        <div className="form-group login-form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            name="email"
            value={values.email}
            onChange={formik.handleChange}
          />
          {error.email && touched.email && (
            <p className="errors">{error.email}</p>
          )}
        </div>
        <div className="login-form-group ">
          <label>Password</label>
          <input
            className="input-password form-control"
            type={isShowPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={formik.handleChange}
          />
          <div
            className="show-password"
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
            {isShowPassword ? (
              <i className="far fa-eye" />
            ) : (
              <i className="far fa-eye-slash" />
            )}
          </div>
          {error.password && touched.password && (
            <p className="errors">{error.password}</p>
          )}
        </div>

        <div className="login-form-group remember-forgot-group">
          <label className="login-form-group-remember" name="rememberMe">
            <p>Remember me</p>
            <input
              type="checkbox"
              name="isRemember"
              // value={values.isRemember}
              defaultChecked={values.isRemember}
              onChange={formik.handleChange}
            />
            <span className="remeber-mark"></span>
          </label>

          <div className="login-form-forgot">
            <Link to="/fogot-password-enter-email" className="forgot-password">
              Forgot password
            </Link>
          </div>
        </div>
        <div className="login-form-submit">
          <button className="login-form-submit-btn" type="submit">
            Login
          </button>
        </div>
      </form>
    </>
  );
}

export default FormLogin;
