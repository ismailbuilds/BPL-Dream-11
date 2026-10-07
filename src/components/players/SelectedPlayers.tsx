import React, { type Dispatch, type SetStateAction } from 'react';
import PlayerCard from './PlayerCard';
import type { PlayerType } from '../../types/type';
import { TbTrash } from 'react-icons/tb';
import SelectedPlayersCard from './SelectedPlayersCard';

interface SelectedPlayersProps{
    coin: number,
    setCoin: Dispatch<SetStateAction<number>>,
    selectedPlayers: PlayerType[],
    setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>
}

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, coin, setCoin}: SelectedPlayersProps) => {
    console.log(selectedPlayers, "from selected player compo")

 if(selectedPlayers.length === 0){
    return (
        <h2 className='font-bold text-3xl my-10 text-red-500 text-center'>No Selected Players</h2>
    );
 }

    return (
        <div className="grid grid-cols-1 gap-4 mt-6">
            {
                selectedPlayers.map((player : PlayerType, ind:number) => {
                    return <SelectedPlayersCard key={ind} player={player} coin={coin} setCoin={setCoin} 
                        selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}>
                        </SelectedPlayersCard>
                }
                )
            }
        </div>
    );
};

export default SelectedPlayers;