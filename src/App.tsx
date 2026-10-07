import Players from "./components/players/Players"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import { Suspense } from "react"
import type { PlayerType } from "./types/type"
import { useState } from 'react';

const playersFetch = async (): Promise<PlayerType[]> => {
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}
// const playerPromise = fetch("/data.json")
//   .then((res) => res.json());


function App() {
  // const playersPromise = playersFetch();
  const [playerPromise] = useState(() => playersFetch())
  const [coin, setCoin] = useState(2000)
  return (
    <>
     <Nav coin={coin}></Nav>
     <Banner></Banner>

     <Suspense fallback={<h3>Loading....</h3>}>
      <Players playerPromise={playerPromise} coin={coin} setCoin={setCoin}></Players>
     </Suspense>

    </>
  )
}

export default App
