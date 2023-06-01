import styles from "./radioField.module.css";
const RadioField = ({ items, name, onSelect, defaultValue }) => {
  return (
    <form
      className={styles.radio}
      onChange={({ target }) => {
        onSelect(name, target.value);
      }}
    >
      {items.map((item: string) => {
        let check = item.toString() === defaultValue;
        console.log(item, defaultValue);
        return (
          <div key={item} className={styles.wrapper}>
            <label>{item}</label>
            <input
              type="radio"
              value={item}
              name={name}
              defaultChecked={check}
            />
          </div>
        );
      })}
    </form>
  );
};
export default RadioField;
