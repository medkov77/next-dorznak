"use client";
import React, { useEffect, useState } from "react";
import styles from "./pagination.module.css";
interface Ipage {
  length: number;
  onSetPage: (page: number) => void;
}
const Pagination = ({ length, onSetPage }: Ipage) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr[i] = i + 1;
  }
  const [active, setActive] = useState(1);
  useEffect(() => {
    onSetPage(active);
  }, [active, onSetPage]);
  return (
    <div className={styles.pagination}>
      {arr.map((item) => (
        <button
          onClick={() => setActive(item)}
          key={item}
          className={
            item === active ? `${styles.btn} ${styles.active}` : styles.btn
          }
        >
          {item}
        </button>
      ))}
    </div>
  );
};
export default Pagination;
