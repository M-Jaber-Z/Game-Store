import Cards from "./Cards"
import { useState } from "react"
const Card = () => {
    const [data, setData] = useState(0)

    const next = () => {
        setData((prev) => {
            if (prev >= Cards.length - 1) {
                return 0
            }
            return prev + 1
        })
    }

    const back = () => {
        setData((prev) => {
            if (prev <= Cards.length - 1) {
                return 0
            }
            return prev - 1
        })

    }
    return (
        <section className="flex justify-around w-full items-center">
            <button onClick={next} className="bg-blue-600 h-2/10 p-3 rounded-2xl hover: cursor-pointer">Click to next</button>
            <div className=" bg-blue-600 h-115 w-90 rounded-2xl text-white p-1 shadow-blue-600 shadow-2xl">
                <img src={Cards[data].img} className="h-7/10 w-full rounded-tr-2xl rounded-tl-2xl" />
                <h1> Name: {Cards[data].name}</h1>
                <h3>Description: {Cards[data].descrip}</h3>
                <h1>Price: {Cards[data].price}</h1>
            </div>
            <button onClick={back} className="bg-blue-600 h-2/10 p-3 rounded-2xl hover: cursor-pointer">Click to back</button>
        </section>
    )
}

export default Card 