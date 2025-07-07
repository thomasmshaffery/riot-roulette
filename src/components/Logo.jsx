// import styles from "./Logo.module.css";

import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        src="/logo.png"
        alt="Riot Roulette"
        className="w-2/5 h-2/5 sm:w-1/3 sm:h-1/3"
      ></img>
    </Link>
  );
}
export default Logo;
