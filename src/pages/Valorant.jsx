import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import styles from "./Valorant.module.css";
import Agent from "../components/Agent";
import { useEffect, useState } from "react";

function Valorant({ agents }) {
  const [currentAgent, setCurrentAgent] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const filtered = agents.data.filter((agent) => agent.isPlayableCharacter);
  const MAX = filtered.length;

  const background = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
    url("/valorant_background.jpg")`;

  function generateRandomNumber() {
    return Math.floor(Math.random() * MAX);
  }

  function handleSetRandomNumber() {
    setRandomNumber(generateRandomNumber());
  }

  useEffect(
    function () {
      async function displayAgent() {
        setCurrentAgent(filtered[randomNumber]);
        setIsLoaded(true);
      }
      displayAgent();
    },
    [randomNumber]
  );

  return (
    <div
      style={{
        backgroundImage: background,
      }}
      className="bg-cover bg-center w-full h-full"
    >
      <div className="flex flex-col relative min-h-svh justify-between">
        <PageNav />
        <section className="h-8 place-items-center">
          {isLoaded}
          {!currentAgent && (
            <div className="place-items-center">
              {" "}
              <h1 className="text-white text-center font-[Valorant] text-4xl relative bottom-30 pb-80 sm:text-8xl">
                Roll an Agent!
              </h1>
              <button
                className={styles.button}
                onClick={() => handleSetRandomNumber()}
              >
                Roll Agent
              </button>
            </div>
          )}
          {currentAgent && currentAgent.isPlayableCharacter ? (
            <div className="place-items-center relative bottom-65 text-white text-center">
              <Agent
                agent={currentAgent}
                className="h-60dvh w-80dvw sm:h-40dvh w-40dvh"
              />
              <button
                className={styles.button}
                onClick={() => handleSetRandomNumber()}
              >
                Roll Agent
              </button>
            </div>
          ) : (
            ""
          )}
        </section>
        <Footer />
      </div>
    </div>
  );
}
export default Valorant;
