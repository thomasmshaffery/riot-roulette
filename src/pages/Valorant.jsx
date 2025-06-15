import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import styles from "./Valorant.module.css";
import Agent from "../components/Agent";
import Button from "../components/Button";
import { useEffect, useState } from "react";

function Valorant({ agents }) {
  const [currentAgent, setCurrentAgent] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);
  const MAX = agents.data.length;

  function generateRandomNumber() {
    return Math.floor(Math.random() * MAX);
  }

  function handleSetRandomNumber() {
    setRandomNumber(generateRandomNumber());
  }

  useEffect(
    function () {
      async function displayAgent() {
        setCurrentAgent(agents.data[randomNumber]);
      }
      displayAgent();
    },
    [randomNumber]
  );

  return (
    <div className={styles.valorant}>
      <PageNav />
      <section>
        {!currentAgent && <h1>Get Rolling!</h1>}
        {currentAgent && <Agent agent={currentAgent} />}

        <button
          className={styles.button}
          onClick={() => handleSetRandomNumber()}
        >
          Roll Agent
        </button>
      </section>
      <Footer />
    </div>
  );
}
export default Valorant;
