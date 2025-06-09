import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav>
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
