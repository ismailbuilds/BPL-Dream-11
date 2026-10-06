import Players from "./components/players/Players"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import { Suspense } from "react"
import type { PlayerType } from "./types/type"

const playersFetch = async (): Promise<PlayerType[]> => {
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}
// const playerPromise = fetch("/data.json")
//   .then((res) => res.json());


function App() {
  const playersPromise = playersFetch();
  return (
    <>
     <Nav></Nav>
     <Banner></Banner>

     <Suspense fallback={<h3>Loading....</h3>}>
      <Players playerPromise={playersPromise}></Players>
     </Suspense>

    </>
  )
}

export default App
