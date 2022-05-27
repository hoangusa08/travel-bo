import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "store/user";
import { useSelector } from "react-redux";
// import { USER_ROLE } from "core/constants";

import "./SideBar.scss";

const menu_manage = [
  {
    label: "Merchant",
    path: "/manage-merchants",
    icon: ""
  },
  {
    label: "Request Merchant",
    path: "/manage-merchants-request",
    icon: ""
  },
  {
    label: "Categories",
    path: "/manage-categories",
    icon: ""
  }
];

const SideBar = () => {
  const history = useHistory();
  const [curentPath, setCurentPath] = useState("");
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState([]);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const onLogOut = () => {
    dispatch(logout());
  };

  useEffect(() => {
    let path = history?.location?.pathname;
    setCurentPath(path);

    // let role = user?.roles[0];

    // if (role == USER_ROLE.ADMIN) {
    setMenu(menu_manage);
    // }
  }, []);

  return (
    <div className="sidebar-wrapper">
      <p
        className={show ? "ic-menu-show" : "ic-menu"}
        onClick={() => {
          setShow(!show);
        }}
      >
        <i className="fas fa-bars"></i>
      </p>
      <nav className={show ? "showSidebar sidebar" : "sidebar"}>
        <div>
          <div className="sidebar-header">
            <img src="" alt="logo" />
          </div>
          <ul className="sidebar-list list-unstyled components">
            {menu?.map((item, key) => {
              return (
                <li
                  className={
                    curentPath == item.path
                      ? "sidebar-list-item active"
                      : "sidebar-list-item "
                  }
                  key={key}
                >
                  <Link to={item.path}>
                    <i className={item?.icon ? item.icon : ""} />
                    <span>{item?.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="sidebar-footer">
          <div className="d-flex align-items-center justify-content-between">
            <span className="mr-2 user-name">{user?.name?.toUpperCase()}</span>
            <i className="fas fa-sign-out-alt" onClick={() => onLogOut()}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
