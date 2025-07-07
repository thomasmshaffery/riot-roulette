import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className="flex items-center justify-around text-white p-6">
      <Logo />
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/league" className="block">
        LEAGUE
      </NavLink>

      <NavLink to="/valorant">VALORANT</NavLink>
    </nav>
  );
}
export default PageNav;
