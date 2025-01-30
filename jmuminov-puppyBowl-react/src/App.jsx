import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers.jsx";
import SinglePlayer from "./components/SinglePlayer.jsx";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  console.log("App rendered");
  return (
    <>
      <div>
        <h1>My Football App</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
