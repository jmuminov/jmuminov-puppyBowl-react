import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllPlayers, removePlayer } from "../API/index";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const data = await fetchAllPlayers();
        setPlayers(data.players);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlayers();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="all-players-container">
      <input
        type="text"
        placeholder="Search players by name"
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="players-list">
        {filteredPlayers.map((player) => (
          <div key={player.id} className="player-card">
            <h4>{player.name}</h4>
            <img src={player.imageUrl} alt={player.name} className="player-image" />
            <button onClick={() => navigate(`/players/${player.id}`)}>
              See details
            </button>
            <button
              onClick={async () => {
                await removePlayer(player.id);
                window.location.reload();
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
