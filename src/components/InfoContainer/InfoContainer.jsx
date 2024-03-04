import React from "react";
import style from "./infocontainer.module.css";
import Statistics from "../Statistics/Statistics";
import Filter from "../Filter/Filter";

const InfoContainer = () => {
  return (
    <div className={style.container}>
      <Statistics />
      <Filter />
    </div>
  );
};

export default InfoContainer;
