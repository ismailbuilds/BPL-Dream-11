import { use } from "react";
import type { PlayerType } from "../../types/type";
import AvailablePlayers from "./AvailablePlayers";

interface PlayersProp{
    playerPromise: Promise<PlayerType[]>
}
const Players = ({ playerPromise } : PlayersProp) => {
  const players = use(playerPromise);

  console.log(players);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between gap-4 mt-4 mb-2">
        <h2 className="text-xl font-bold">Available Players </h2>
      <div className="flex gap-3">
        <button className="btn btn-secondary">Available</button>
        <button className="btn btn-success">Selected</button>
      </div>

      </div>
      <AvailablePlayers players = {players}/>
    </div>
  );
};

export default Players;