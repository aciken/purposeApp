import { useLocation } from "react-router-dom"
import { useEffect } from "react";
import axios from "axios";



export function Results() {

const location = useLocation();
const values = location.state
console.log(values)
console.log(values.youtube)

useEffect(() => {
    axios.post('http://localhost:3000/generateResult', values)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })

}, [])





    return(
        <div className="h-[100vh] flex flex-row justify-center items-center relative">
            <a href="/" className="font-poppins font-bold text-2xl absolute top-2">Logo</a>
            <h1 className="font-poppins font-semibold text-emerald-500 text-4xl">Results</h1>
        </div>
    )
}