import { FaUser } from "react-icons/fa";
import PlayerCard from "./PlayerCard";
import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../../types/type";

interface AvailablePlayerProp{
    players: Promise<PlayerType>
    coin: number,
    setCoin: Dispatch<SetStateAction<number>>,
    selectedPlayers: PlayerType[],
    setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>
}
const AvailablePlayers = ({ players, coin, setCoin, selectedPlayers, setSelectedPlayers }: AvailablePlayerProp) => {
    return (
        <div className="grid grid-cols-3 gap-4 mt-6">
            {
                players.map((player: PlayerType, ind:number) => {
                    return (
                        <PlayerCard key={ind} player ={player} coin={coin} setCoin={setCoin} 
                        selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></PlayerCard>
                    )
                })
            }
        </div>
    );
};

export default AvailablePlayers;