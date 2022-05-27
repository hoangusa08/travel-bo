import React from "react";
import "./MainLayout.scss";
import SideBar from "../../components/SideBar/SideBar";

const MainLayout = (props) => {
  return (
    <>
      <div className="main-layout">
        <div className="d-flex">
          <SideBar />
          <div className="main-layout-body">{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
