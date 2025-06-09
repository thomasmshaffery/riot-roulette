import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/league">League</NavLink>
        </li>
        <li>
          <NavLink to="/valorant">Valorant</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default PageNav;
