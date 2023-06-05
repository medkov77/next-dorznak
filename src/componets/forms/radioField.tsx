import styles from "./radioField.module.css";
interface IradioProps {
  items: { label: string; value: string | number }[];
  name: string;
  onSelect: (name: string, value: string) => void;
  defaultValue: string;
}
const RadioField = ({ items, name, onSelect, defaultValue }: IradioProps) => {
  return (
    <form
      className={styles.radio}
      onChange={({ target }) => {
        onSelect(name, target.value);
      }}
    >
      {items.map((item) => {
        let check = item.value.toString() === defaultValue;
        return (
          <div key={item.label} className={styles.wrapper}>
            <label>{item.label}</label>
            <input
              type="radio"
              value={item.value}
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
