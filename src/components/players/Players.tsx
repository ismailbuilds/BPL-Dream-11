import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { PlayerType } from "../../types/type";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface PlayersProp{
    playerPromise: Promise<PlayerType[]>
    coin: number,
    setCoin: Dispatch<SetStateAction<number>>;
}
const Players = ({ playerPromise, coin, setCoin } : PlayersProp) => {
  const players = use(playerPromise);
  console.log(players);
  
  const [buttonType, setButtonType] = useState<"available" | "selected">("available")
  const [selectedPlayers, setSelectedPlayers] = useState<PlayerType[]>([])
  console.log(buttonType)
  // const handleButtonType = (type : "available" | "selected") => {
  //   setButtonType(type)
  // }
  return (
    <div className="container mx-auto">
      <div className="flex justify-between gap-4 mt-4 mb-2">
        <h2 className="text-xl font-bold">{buttonType === "available" ? "Available Players" : "Selected Players"}</h2>
      <div>
        <button onClick={() => setButtonType("available")} className={`btn ${buttonType === "available" ? "btn-success" : "" } rounded-r-none`}>Available</button>
        <button onClick={() => setButtonType("selected")} className={`btn ${buttonType === "selected" ? "btn-success" : "" } rounded-l-none`}>Selected</button>
      </div>

      </div>
      {
        buttonType === "available" ? (<AvailablePlayers players = {players} coin={coin} setCoin={setCoin} 
          selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />) :
          (<SelectedPlayers  selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}
          coin={coin} setCoin={setCoin} />)
      }
    </div>
  );
};

export default Players;

