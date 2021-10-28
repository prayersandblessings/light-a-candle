import React from "react";
import Pulse from "react-reveal/Pulse";

import classes from "./UnderConstruction.module.scss";

const UnderConstruction = () => {
  return (
    <div className={classes.content}>
      <Pulse>
        <h1>Light to Light</h1>
      </Pulse>

      <Pulse>
        <h2>Prayers and Blessings</h2>
      </Pulse>

      <p className={classes["launch-date"]}>Will Launch 2022 As:</p>

      <p className={classes["launch-info"]}>Stay Tuned!</p>
    </div>
  );
};

export default UnderConstruction;