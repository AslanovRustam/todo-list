import React, { useState } from "react";
import style from "./filter.module.css";
import { filterVariants } from "../../helpers/helpers";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";
import { selectFilter } from "../../redux/selectors";

const Filter = () => {
  const [show, setShow] = useState(false);
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const setilter = (e) => {
    const name = e.target.dataset.name;
    dispatch(changeFilter(name));
  };

  return (
    <div className={style.container}>
      <p className={style.name} onClick={() => setShow(!show)}>
        Filter
      </p>
      <ul className={`${style.list} ${show && style.show}`}>
        <li
          className={`${style.item} ${
            filterValue === filterVariants.all && style.active
          }`}
          data-name={filterVariants.all}
          name={filterVariants.all}
          onClick={(e) => setilter(e)}
        >
          all
        </li>
        <li
          className={`${style.item} ${
            filterValue === filterVariants.completed && style.active
          }`}
          data-name={filterVariants.completed}
          onClick={(e) => setilter(e)}
        >
          completed
        </li>
        <li
          className={`${style.item} ${
            filterValue === filterVariants.incompleted && style.active
          }`}
          data-name={filterVariants.incompleted}
          onClick={(e) => setilter(e)}
        >
          not finished
        </li>
      </ul>
    </div>
  );
};

export default Filter;
