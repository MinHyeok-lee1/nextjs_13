"use client";

import "../../styles/globals.css";
import styles from "./breaking.module.css";
import { useState, useEffect } from "react";

export default function Page() {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber(number + 1);
  };
  const onDecrease = () => {
    setNumber(number - 1);
  };
  useEffect(() => {});
  return (
    <div className={styles.component}>
      <div>BREAKING!</div>
      <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}
