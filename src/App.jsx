import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Valorant from "./pages/valorant";
import League from "./pages/League";
import PageNotFound from "./pages/PageNotFound";
import { useState, useEffect } from "react";

function App() {
  const [agents, setAgents] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(function () {
    async function getAgents() {
      try {
        const res = await fetch(`https://valorant-api.com/v1/agents`);

        if (!res.ok) throw new Error("Unable to retrieve agents.");

        const data = await res.json();
        setAgents(data);
        setIsLoaded(true);
      } catch (err) {
        console.log(err.message);
      }
    }
    getAgents();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />

        {isLoaded && (
          <Route
            path="valorant"
            element={<Valorant agents={agents} isLoaded={isLoaded} />}
          />
        )}

        <Route path="league" element={<League />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
