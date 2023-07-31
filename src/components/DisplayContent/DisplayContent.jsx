import React from "react";
import LeftSidePanel from "./LeftSide/LeftSidePanel";
import RightSidePanel from "./RightSide/RightSidePanel";

const DisplayContent = () => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <LeftSidePanel />
      </div>
      <div>
        <RightSidePanel />
      </div>
    </div>
  );
};

export default DisplayContent;
