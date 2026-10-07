import { FaUser } from "react-icons/fa";
import PlayerCard from "./PlayerCard";
import type { Dispatch, SetStateAction } from "react";

interface AvailablePlayerProp{
    players: Promise<PlayerType>
    coin: number,
    setCoin: Dispatch<SetStateAction<number>>
}
const AvailablePlayers = ({ players, coin, setCoin }: AvailablePlayerProp) => {
    return (
        <div className="grid grid-cols-3 gap-4 mt-6">
            {
                players.map((player: PlayerType, ind:number) => {
                    return (
                        <PlayerCard key={ind} player ={player} coin={coin} setCoin={setCoin}></PlayerCard>
                    )
                })
            }
        </div>
    );
};

export default AvailablePlayers;