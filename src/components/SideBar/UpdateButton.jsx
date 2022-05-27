import React from "react";
import http from "core/services/httpService.js";

const callUpdateRCM = async () => {
  await http
    .get("/project/projects/update-excel")
    .then(async (res) => {
      const calculate = await http.get(
        "/project/project-members/calculate-and-update"
      );
      console.log(res);
      console.log(calculate);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const UpdateButton = () => {
  return (
    <div>
      <button
        style={{
          margin: "50px",
          backgroundColor: "navy",
          color: "white"
        }}
        onClick={() => callUpdateRCM()}
      >
        Update RCM
      </button>
    </div>
  );
};
