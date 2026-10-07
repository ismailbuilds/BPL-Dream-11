import React from 'react';

interface SelectedPlayersProps{
    selectedPlayers: PlayerType[],
    setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>
}

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers}: SelectedPlayersProps) => {
    console.log(selectedPlayers, "from selected player compo")
    return (
        <div>
            Selected Players
        </div>
    );
};

export default SelectedPlayers;