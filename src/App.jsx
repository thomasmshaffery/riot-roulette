import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import Valorant from "./pages/Valorant";
import League from "./pages/League";

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
      } catch (err) {
        console.log(err.message);
      }
    }
    getAgents();
    setIsLoaded(true);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage isLoaded={isLoaded} />} />
        {isLoaded && (
          <Route
            path="valorant"
            element={<Valorant agents={agents} onSetAgents={setAgents} />}
          />
        )}
        <Route path="league" element={<League />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
