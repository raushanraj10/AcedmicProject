import axios from "axios"
import { useEffect } from "react"


function App() {
 const fun=async()=>{
  const data="Yes From Frontend"
   const res=await axios.post("http://localhost:5000/",{data},{withCredentials:true})
   console.log(res.data)
 }
useEffect(()=>{fun()},[])
  return (
    <>
    <div className="font-bold text-center">Welcomed By World Fastet Coder</div>
    </>
  )
}

export default App
