import { FaUser, FaStar } from "react-icons/fa";
import type { PlayerType } from "../../types/type";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";
import Players from "./Players";

interface PlayerTypeProp{
    player: PlayerType,
    coin: number,
    setCoin: Dispatch<SetStateAction<number>>,
    selectedPlayers: PlayerType[],
    setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>
}

const PlayerCard = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }: PlayerTypeProp) => {
    const [IsSelected, setIsSelected] = useState(false)
    const handleIsSelected = () =>{
        setIsSelected(!IsSelected)
        const newCoinPrice = coin - player.price;
        if(newCoinPrice >= 0){
            setCoin(newCoinPrice)
            toast.success(`${player.playerName} Purchaised Successfully`)
        }else{
            toast.error("Insufficient Balance");
        }

        
        setSelectedPlayers([...selectedPlayers, player])
    }
    return (
        <div className="group overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Player Image */}
            <figure className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-base-200 to-base-300">
                <img
                    src={player.playerImg}
                    alt={player.playerName}
                    className="h-full w-full object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Player Type Badge */}
                <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold 
                text-primary-content shadow-sm">
                    {player.playerType}
                </span>
            </figure>

            {/* Card Body */}
            <div className="space-y-5 p-5">
                {/* Player Name */}
                <div>
                    <h2 className="flex items-center gap-2 text-xl font-bold">
                        <FaUser className="text-primary" />
                        {player.playerName}
                    </h2>

                    <p className="mt-1 text-sm text-base-content/60">
                        {player.origin}
                    </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-base-200" />

                {/* Player Styles */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-base-200/60 p-3">
                        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-base-content/50">
                            Batting
                        </p>
                        <p className="text-sm font-semibold">
                            {player.battingStyle}
                        </p>
                    </div>

                    <div className="rounded-xl bg-base-200/60 p-3">
                        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-base-content/50">
                            Bowling
                        </p>
                        <p className="text-sm font-semibold">
                            {player.bowlingStyle}
                        </p>
                    </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-base-content/60">
                        Rating
                    </span>

                    <div className="flex items-center gap-1">
                        <FaStar className="text-warning" />
                        <span className="font-bold">4.8</span>
                    </div>
                </div>

                {/* Price + Button */}
                <div className="flex items-center justify-between gap-4 border-t border-base-200 pt-4">
                    <div>
                        <p className="text-xs font-medium text-base-content/50">
                            Player Price
                        </p>

                        <h3 className="text-2xl font-bold text-primary">
                            {player.price}
                        </h3>
                    </div>

                    <button onClick={handleIsSelected} className="btn btn-primary rounded-xl px-5 shadow-sm 
                    transition-all hover:scale-105" 
                    disabled={IsSelected === true ? true : false}
                    >
                        {IsSelected  ? "Selected" : "Choose Player"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
// ()=> setIsSelected(true)