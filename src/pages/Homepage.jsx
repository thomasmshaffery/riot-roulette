import Button from "../components/Button";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

function Homepage() {
  const background =
    'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url("background' +
    Math.floor(Math.random() * 30 + 1) +
    '.jpg")';

  return (
    <div style={{ backgroundImage: background }} className={styles.homepage}>
      <PageNav />
      <section>
        <h1>RIOT ROULETTE</h1>
        <h2>
          Discover new looks and enjoy your classics in this fun Riot themed
          roulette! Find new skins from League of Legends or artwork for your
          favorite Valorant operators.
        </h2>
        <Button />
      </section>
      <Footer />
    </div>
  );
}
export default Homepage;
