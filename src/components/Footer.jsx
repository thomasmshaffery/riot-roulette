import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Riot Roulette was created under Riot Games' "Legal Jibber Jabber" policy
      using assets owned by Riot Games. Riot Games does not endorse or sponsor
      this project.
    </footer>
  );
}
export default Footer;
