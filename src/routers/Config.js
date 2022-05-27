import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register"
// import Home from "../pages/home/Home"
// import Tour from "../pages/tour/tour";
import Error from "../pages/error/Error";
import Provider from "../pages/provider/provider";
// import Account from "../pages/Account/Account";
// import TourDetail from "../pages/tourDetail/tourDetail";


export const routeConfig = [
  {
    path: "/register",
    isPrivate: false,
    exact: true,
    component: Register
  },
  {
    path: "/login",
    isPrivate: false,
    exact: true,
    component: Login
  },
  {
    path: "/provider",
    isPrivate: false,
    exact: true,
    component: Provider
  },
  { path: "*", component: Error }
];

const PrivateRoute = (privateProps) => {
  const { user } = useSelector((state) => state.user);

  if (user) return <privateProps.component {...privateProps} />;

  return <Redirect to="/home" />;
};

export const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) =>
        route.isPrivate ? (
          <PrivateRoute {...route} />
        ) : (
          <route.component {...props} />
        )
      }
    />
  );
};
