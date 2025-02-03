import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers.jsx";
import SinglePlayer from "./components/SinglePlayer.jsx";
import NewPlayerForm from "./components/NewPlayerForm.jsx";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>My Football App</h1>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
          <Route path="/new-player" element={<NewPlayerForm />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
