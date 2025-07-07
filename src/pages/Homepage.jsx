import { Link } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

function Homepage({ isLoaded }) {
  const background =
    'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url("background' +
    Math.floor(Math.random() * 18 + 1) +
    '.jpg")';

  return (
    <div style={{ backgroundImage: background }} className="bg-cover bg-center w-full min-h-svh">
      {isLoaded && <PageNav />}
      <div className="flex flex-col min-h-svh justify-between">
      <section className="h-10 place-items-center">
        <h1 className="text-white">RIOT ROULETTE</h1>
        <h2 className="text-white max-w-3/5 font-sans text-sm">
          This roulette application will display a random champion skin for
          League of Legends and a random agent for Valorant. The homepage cycles
          between artwork from both games randomly. Thank you for visiting and I
          hope you enjoy it!
        </h2>
        <Link to="League">
          <Button>DISCOVER</Button>
        </Link>
      </section>
       <Footer className="h-5" />
      </div>
    </div>
  );
}
export default Homepage;
