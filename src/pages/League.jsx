import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import styles from "./League.module.css";
import Champion from "../components/Champion";

function League({ leagueVersion }) {
  const [champions, setChampions] = useState([]);
  const [championList, setChampionList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentChampion, setCurrentChampion] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);
  const MAX = championList.length;

  useEffect(
    function () {
      async function generateChampionList() {
        try {
          setChampionList(Object.keys(champions.data));
        } catch (err) {}
      }
      generateChampionList();
    },
    [champions]
  );

  useEffect(
    function () {
      async function getChampionData() {
        try {
          const res = await fetch(
            `https://ddragon.leagueoflegends.com/cdn/` +
              leagueVersion +
              `/data/en_US/champion.json`
          );
          if (!res.ok) throw new Error("Unable to fetch champion list.");

          const data = await res.json();
          setChampions(data);
        } catch (err) {
          console.log(err.message);
        }
      }

      getChampionData();
      setIsLoaded(true);
    },
    [leagueVersion]
  );

  useEffect(
    function () {
      async function displayChampion() {
        setCurrentChampion(championList[randomNumber]);
      }
      displayChampion();
    },
    [randomNumber]
  );

  function generateRandomNumber() {
    return Math.floor(Math.random() * MAX);
  }

  function handleSetRandomNumber() {
    setRandomNumber(generateRandomNumber());
  }

  return (
    <div className={styles.league}>
      <PageNav />
      <section className={styles.section}>
        {!currentChampion && <h1>Roll A Champion!</h1>}
        {currentChampion && (
          <Champion champion={currentChampion} champions={champions} />
        )}
        {isLoaded && (
          <button
            className={styles.button}
            onClick={() => handleSetRandomNumber()}
          >
            Roll Champion
          </button>
        )}
      </section>
      <Footer />
    </div>
  );
}
export default League;
