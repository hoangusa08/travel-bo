import React from "react";
import "./MainLayout.scss";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/header/Header";

const MainLayout = (props) => {
  return (
    <>
      <div className="main-layout">
        <div className="d-flex">
          <SideBar />
          <div className="main-layout-body"><Header/>{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
