import { useEffect, useState } from "react";
import styles from "./Champion.module.css";

function Champion({ champName, currentChampion }) {
  const {
    data: {
      [champName]: { name: name, title: title, skins: skins } = {
        name: "nameless",
        title: "titleless",
        skins: "skinless",
      },
    },
  } = currentChampion;

  const MAX = skins.length;
  const randomNumber = Math.floor(Math.random() * (MAX - 1)) + 1;
  const randomSkinName = skins[randomNumber].name;
  const randomSkinNumber = skins[randomNumber].num;
  const skinImage =
    `url(./centered/` + champName + `_` + randomSkinNumber + `.jpg)`;
  const background =
    "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))," + skinImage;

  return (
    <div
      className={styles.champion}
      style={{
        backgroundImage: background,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>{randomSkinName}</h1>
      {/* <img src={skinImage}></img> */}
    </div>
  );
}
export default Champion;
