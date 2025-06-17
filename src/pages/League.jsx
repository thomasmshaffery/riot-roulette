import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import styles from "./League.module.css";

function League({ isLoaded, leagueVersion }) {
  return (
    <div className={styles.league}>
      <PageNav />
      <section className={styles.section}>
        <h1>League of Legends</h1>
      </section>
      <Footer />
    </div>
  );
}
export default League;
