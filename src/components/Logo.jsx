import { Link } from "react-router-dom";
// import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img
        src="/logo.png"
        alt="Riot Roulette"
        className="w-100-px h-100-px sm:w-400-px h-400-px"
      ></img>
    </Link>
  );
}
export default Logo;
