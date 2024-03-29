import React from "react";
import Checked from "../Checked/Checked";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/todoSlice";
import style from "./todoitem.module.css";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };
  return (
    <li className={style.item}>
      <p className={style.remove} onClick={handleDelete}>
        delete
      </p>
      <div
        className={`${style.name} ${todo.completed && style.checked}`}
        onClick={handleChange}
      >
        {todo.text}
        <Checked checked={todo.completed} />
      </div>
    </li>
  );
};

export default TodoItem;
