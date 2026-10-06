import { FaUser } from "react-icons/fa";
import PlayerCard from "./PlayerCard";
const AvailablePlayers = ({ players }) => {
    return (
        <div className="grid grid-cols-3 gap-4 mt-6">
            {
                players.map((player: PlayerType, ind:number) => {
                    return (
                        <PlayerCard key={ind} player ={player}></PlayerCard>
                    )
                })
            }
        </div>
    );
};

export default AvailablePlayers;