import React from "react";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";

import "./Loading.scss";

const Loading = ({ visible = false }) => {
  return (
    <div className={!visible ? "d-none" : "loading-wrapper"}>
      <div className="loading-inner">
        <Loader
          type="Oval"
          color="#00BFFF"
          height={50}
          width={50}
          visible={visible}
        />
      </div>
    </div>
  );
};

Loading.propTypes = {
  visible: PropTypes.bool
};

export default Loading;
