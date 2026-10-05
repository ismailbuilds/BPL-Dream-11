import { use } from "react";
import type { PlayerType } from "../../types/type";
interface PlayersProp{
    playerPromise: Promise<PlayerType[]>
}
const Players = ({ playersPromise } : PlayersProp) => {
  const players = use(playersPromise);

  console.log(players);

  return (
    <div>
     <h1>name: {players}</h1>
    </div>
  );
};

export default Players;