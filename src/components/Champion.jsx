import { useEffect, useState } from "react";
import styles from "./Champion.module.css";

function Champion({ currentChampion }) {
  return (
    <div className={styles.champion}>
      <h1>
        {currentChampion} {currentChampion.blurb}
      </h1>
      {/* <img src={championImage}></img> */}
      <h2></h2>
    </div>
  );
}
export default Champion;
