import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import styles from "./Valorant.module.css";

function Valorant() {
  return (
    <div className={styles.valorant}>
      <PageNav />
      Valorant Roulette
      <Footer />
    </div>
  );
}
export default Valorant;
