import { useContext } from "react";
import { globalStore } from "../stores/MainStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function profile() {
  const{token}=useContext(globalStore)
  const navigate=useNavigate()
  useEffect(()=>{
    if(!token){
      navigate("/login")
    }
  },[])
  return (
    <div>
      <h1 className="text-3xl font-bold ">
        profile
      </h1>
    </div>
  )
}
