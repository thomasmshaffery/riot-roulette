import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import styles from "./League.module.css";
import Champion from "../components/Champion";

function League() {
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

  useEffect(function () {
    async function getChampions() {
      try {
        const res = await fetch("./champion.json");
        if (!res.ok) throw new Error("Something went wrong retrieving data.");

        const data = await res.json();
        setChampions(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    getChampions();
    setIsLoaded(true);
  }, []);

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
        {currentChampion && <Champion currentChampion={currentChampion} />}
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
