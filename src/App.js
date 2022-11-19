import { Route, Routes } from "react-router-dom";
import GameProvider from "./context/GameContext";
import GamePage from "./pages/GamePage/GamePage";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <GameProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </GameProvider>
  );
}

export default App;
