import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import styles from "./League.module.css";
import Champion from "../components/Champion";

function League() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [champions, setChampions] = useState([]);
  const [championList, setChampionList] = useState([]);
  const [currentChampion, setCurrentChampion] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);
  const champName = championList[randomNumber];
  const MAX = championList.length;

  const background = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
    url("/league_background.jpg")`;

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
      async function fetchChampion() {
        try {
          const res = await fetch(
            `./champion/` + championList[randomNumber] + `.json`
          );
          if (!res.ok) throw new Error("Champion details couldn't be fetched.");

          const data = await res.json();
          setCurrentChampion(data);
        } catch (err) {
          console.log(err.message);
        }
      }
      fetchChampion();
    },
    [randomNumber]
  );

  function generateRandomNumber() {
    return Math.floor(Math.random() * MAX);
  }

  function handleSetRandomChampion() {
    setRandomNumber(generateRandomNumber());
  }

  return (
    <div
      style={{ backgroundImage: background }}
      className="bg-cover bg-center w-full h-full"
    >
      <div className="flex flex-col relative min-h-svh justify-between">
        <PageNav />
        <section className="h-8 place-items-center">
          {!currentChampion && (
            <div className="place-items-center">
              <h1 className="text-white text-center text-4xl relative bottom-30 pb-80 sm:text-8xl">
                Roll a Champion!
              </h1>
              <div className="">
                <button
                  className={styles.button}
                  onClick={() => handleSetRandomChampion()}
                >
                  Roll Champion
                </button>
              </div>
            </div>
          )}
          {currentChampion && (
            <div className="fixed place-items-center left-10 bottom-20 sm:left-1/9">
              <Champion
                champName={champName}
                currentChampion={currentChampion}
              />

              <button
                className={styles.button}
                onClick={() => handleSetRandomChampion()}
              >
                Roll Champion
              </button>
            </div>
          )}
        </section>
        <Footer className="h-5" />
      </div>
    </div>
  );
}
export default League;
