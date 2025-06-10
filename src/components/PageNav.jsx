import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/league">LEAGUE</NavLink>
        </li>
        <li>
          <NavLink to="/valorant">VALORANT</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default PageNav;
