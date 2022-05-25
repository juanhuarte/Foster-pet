import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import NavBar from "../NavBar/NavBar";
import Animals from "../Animals/Animals";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.nav}>
        <NavBar />
      </div>
      <div className={styles.animals}>
        <Animals />
      </div>
    </div>
  );
}
