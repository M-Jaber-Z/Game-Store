// import { useState } from "react"
// import { Confetti } from "@neoconfetti/react"
// const App = () => {
//   const [key, setKey] = useState(0)
//   function cliked(){
//     setKey((prev) => prev + 1)
//   }
//   return (
//     <main className="bg-black h-screen flex justify-center items-center">
//       <button onClick={cliked} className="bg-red-600 p-5 rounded-full ">click me</button>
//        <Confetti key={key}/>
//     </main>
//   )
// }
// export default App

import Card from "./Card"


const App = () =>{
  return(
    <main className="bg-gray-400 w-screen h-screen flex justify-around items-center flex-col">
      <h1 className="text-4xl">Welcome to my game Store!</h1>
      <Card/>
    </main>
  )
}

export default App