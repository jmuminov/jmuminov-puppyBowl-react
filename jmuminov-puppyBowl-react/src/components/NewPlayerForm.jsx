import { addNewPlayer } from "../API/index";

export default function NewPlayerForm() {
  return (
    <div className="form-container">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const playerName = e.target.name.value;
          const playerBreed = e.target.breed.value;
          const playerStatus = e.target.status.value;
          const playerImgUrl = e.target.playerImgUrl.value;
          const player = {
            name: playerName,
            breed: playerBreed,
            status: playerStatus,
            imageUrl: playerImgUrl,
          };
          await addNewPlayer({ player });
          e.target.reset();
          window.location.reload();
        }}
      >
        <input type="text" name="name" placeholder="Name" className="input-field" />
        <input type="text" name="breed" placeholder="Breed" className="input-field" />
        <select name="status" className="input-field">
          <option value="bench">Bench</option>
          <option value="field">Field</option>
        </select>
        <input type="text" name="playerImgUrl" placeholder="Player Image Url" className="input-field" />
        <button type="submit" className="submit-button">Add Player</button>
      </form>
    </div>
  );
}
