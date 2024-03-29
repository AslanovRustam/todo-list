import React from "react";
import { useSelector } from "react-redux";
import { selectAllTodos, selectedComplitedTodos } from "../../redux/selectors";
import style from "./statistics.module.css";

const Statistics = () => {
  const completedTodos = useSelector(selectedComplitedTodos);
  const todos = useSelector(selectAllTodos);

  return (
    <div className={style.statistics}>
      Statistics:<br></br> Not completed Todos:{" "}
      <span>{todos.length - completedTodos}</span> <br></br> Completed todos:{" "}
      <span>{completedTodos}</span>
    </div>
  );
};

export default Statistics;
