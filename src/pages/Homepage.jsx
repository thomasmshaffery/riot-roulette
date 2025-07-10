import { Link } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";

function Homepage({ isLoaded }) {
  const background =
    'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url("background' +
    Math.floor(Math.random() * 18 + 1) +
    '.jpg")';

  return (
    <div
      style={{ backgroundImage: background }}
      className="bg-cover bg-center w-full min-h-svh"
    >
      {isLoaded}
      <div className="flex flex-col min-h-svh justify-between">
        <PageNav />
        <section className="h-8 relative bottom-5 place-items-center">
          <h1 className="text-white text-4xl relative bottom-40 pb-80 sm:text-8xl">
            RIOT ROULETTE
          </h1>
          <h2 className="text-white text-center max-w-3/4 relative bottom-20 font-sans text-sm/6 sm:max-w-2/4">
            This roulette application will display a random champion skin for
            League of Legends and a random agent for Valorant. The homepage
            cycles between artwork from both games randomly. This project was
            developed using React, Tailwind, Valorant-API and Riot Games Data
            Dragon as well as assets provided by Riot Games.
          </h2>
          <Link to="League">
            <Button className="">DISCOVER</Button>
          </Link>
        </section>
        <Footer className="h-5" />
      </div>
    </div>
  );
}
export default Homepage;
