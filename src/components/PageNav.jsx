import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className="flex items-center justify-around text-white">
      <Logo />
      <NavLink to="/" className="inline-block">
        HOME
      </NavLink>
      <NavLink to="/league" className="inline-block">
        LEAGUE
      </NavLink>

      <NavLink to="/valorant" className="inline-block">
        VALORANT
      </NavLink>
    </nav>
  );
}
export default PageNav;
