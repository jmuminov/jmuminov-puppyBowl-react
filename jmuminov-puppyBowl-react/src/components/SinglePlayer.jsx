import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePlayer } from "../API/index";

export default function SinglePlayer() {
  const { id } = useParams();
  console.log("Player ID:", id);
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const data = await fetchSinglePlayer(id);
        setPlayer(data.player);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlayer();
  }, [id]);

  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-player-container">
      <h2>{player.name}</h2>
      <p>
        <strong>Breed:</strong> {player.breed}
      </p>
      <p>
        <strong>Status:</strong> {player.status}
      </p>
      <img src={player.imageUrl} alt={player.name} className="player-image" />
    </div>
  );
}
