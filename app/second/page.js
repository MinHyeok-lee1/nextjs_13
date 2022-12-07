"use client";
import Link from "next/link";
import styles from "../breaking/breaking.module.css";

export default function Page() {
  return (
    <div>
      <Link href="/breaking">navigate to breaking</Link>;
      <div className={styles.component}>
        <div>BREAKING</div>
        <div>
          <button onClick={(e) => console.log(e)}>break this</button>
        </div>
      </div>
    </div>
  );
}
