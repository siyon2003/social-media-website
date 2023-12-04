import { createContext, useEffect, useState } from "react";

export const DarkContext=createContext();

export const DarkContextProvider=({children})=>{
    const [mode,setmode]=useState(localStorage.getItem("mode")|| "light")

    const toggle=()=>{
        setmode((currentmode)=>(currentmode==="light" ? "dark":"light"))
    }

    useEffect(()=>{
        localStorage.setItem("mode",mode)
    },[mode])
    return(
        <DarkContext.Provider value={{mode,toggle}}>
            {children}
        </DarkContext.Provider>
    )
}