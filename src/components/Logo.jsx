// import styles from "./Logo.module.css";

import { Link } from "react-router-dom";

function Logo() {
  return (
    <img
      src="/logo.png"
      alt="Riot Roulette"
      className="w-1/3 h-1/3 sm:w-1/4 sm:h-1/4 pt-10"
    ></img>
  );
}
export default Logo;
