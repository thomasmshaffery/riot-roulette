import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.homepage}>
      <PageNav />
      Riot Roulette
    </div>
  );
}
export default Homepage;
