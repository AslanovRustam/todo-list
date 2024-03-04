import React from "react";
import style from "./checked.module.css";

const Checked = ({ checked }) => {
  return (
    <p className={`${style.checkbox} ${checked && style.checked}`}>
      {checked ? "competed" : "not completed"}
    </p>
  );
};

export default Checked;
