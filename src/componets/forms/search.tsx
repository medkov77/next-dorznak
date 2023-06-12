import { useState } from "react";
import styles from "./search.module.css";
const Search = ({ onChange }) => {
  const [data, setData] = useState("");
  const handleChange = ({ target }) => {
    setData(target.value);
    if (data.length >= 3) {
      onChange(data);
    }
  };
  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        type="text"
        placeholder="Поиск знаков по названию или номеру по ГОСТ"
        onChange={(event) => handleChange(event)}
        value={data}
      ></input>
    </div>
  );
};
export default Search;
