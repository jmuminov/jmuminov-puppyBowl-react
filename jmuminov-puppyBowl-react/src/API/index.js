const cohortName = "2410-FTB-ET-WEB-PT-jmuminov";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${API_URL}/players`);
    const players = await response.json();
    return players.data;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
};

export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${API_URL}/players/${playerId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const playerData = await response.json();
    return playerData.data.player;
  } catch (err) {
    console.error("Error fetching single player:", err);
    return null;
  }
};

export const removePlayer = async (playerId) => {
    try {
      await fetch(`${API_URL}/players/${playerId}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.error(
        `Whoops, trouble removing player #${playerId} from the roster!`,
        err
      );
    }
  };

  export const addNewPlayer = async (playerObj) => {
    try {
      const response = await fetch(`${API_URL}/players`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(playerObj),
      });
      const json = await response.json();
  
      if (json.error) {
        throw new Error(json.error.message);
      }
    } catch (err) {
      console.error("Oops, something went wrong with adding that player!", err);
    }
  };