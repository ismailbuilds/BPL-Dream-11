import { TbTrash } from "react-icons/tb"
import type { PlayerType } from "../../types/type"
import type { Dispatch, SetStateAction } from "react"

 
 
 interface SelectedPlayersCardProps {
    player: PlayerType
    coin: number,
    setCoin: Dispatch<SetStateAction<number>>,
    selectedPlayers: PlayerType[],
    setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>
}

export default function SelectedPlayersCard({player, 
    selectedPlayers, setSelectedPlayers,
    coin, setCoin }: SelectedPlayersCardProps) {
    
    const handleRemovePlayer = (player:PlayerType) => {
    const restPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != player.playerName);
    console.log(restPlayers, "restPlayers")

    setSelectedPlayers(restPlayers)

    const newCoinPrice = coin + player.price;
    setCoin(newCoinPrice)
}
        
    return (
        <div className='flex gap-2 justify-between items-center border-2 
                         border-gray-200 rounded-3xl py-2 px-4'>
                        <div className='flex gap-2'>
                            <img src={player.playerImg} alt="" className='w-[65px] h-[65px]' />
                            <div>
                                <h2 className='font-bold text-xl'>{player.playerName}</h2>
                                <p>{player.playerType}</p>
                            </div>
                        </div>
                        <span className='text-red-500 font-bold cursor-pointer' 
                        onClick={() => handleRemovePlayer(player)}>
                            <TbTrash />
                        </span>
        </div>
    )
}