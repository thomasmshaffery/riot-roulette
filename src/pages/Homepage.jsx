import { Link } from "react-router-dom";
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
          This roulette application will display a random champion skin for
          League of Legends and a random agent for Valorant. The homepage cycles
          between artwork from both games randomly. Thank you for visiting and I
          hope you enjoy it!
        </h2>
        <Link to="League">
          <Button>DISCOVER</Button>
        </Link>
      </section>
      <Footer />
    </div>
  );
}
export default Homepage;
