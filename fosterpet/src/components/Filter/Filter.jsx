import styles from "./Filter.module.css";
import { useState } from "react";
import { dataFilter } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseCircleOutline } from "react-icons/io5";

const Filter = ({ actionCreator }) => {
  const [filters, setFilters] = useState([]);
  const [clicked, setClicked] = useState(true);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    setFilters((oldFilters) => {
      const newFilter = [...oldFilters, value];
      dispatch(actionCreator(newFilter));
      return newFilter;
    });
    setClicked(false);
  };

  const handleDelete = (e, deletedFilter) => {
    e.preventDefault();
    setFilters((oldFilters) => {
      const newFilter = oldFilters.filter((e) => e !== deletedFilter);
      dispatch(actionCreator(newFilter));
      return newFilter;
    });
  };
  return (
    <div className={styles.container}>
      <select className={styles.select} onChange={handleChange}>
        {dataFilter?.map((element, i) => (
          <option
            key={i}
            disabled={i === 0 ? true : false}
            selected={i === 0 && clicked}
            value={element}
          >
            {i === 0 ? element : element.split(" ")[1]}
          </option>
        ))}
      </select>
      <div
        className={
          filters.length === 0 ? styles.emptyList : styles.containerList
        }
      >
        {filters?.map((selected, i) => (
          <div key={i} className={styles.list}>
            <li>{selected.split(" ")[1]}</li>
            <button
              onClick={(e) => handleDelete(e, selected)}
              className={styles.btn}
            >
              <IoCloseCircleOutline />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
