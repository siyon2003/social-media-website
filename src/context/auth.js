import { createContext, useEffect, useState } from "react";
import axios from 'axios';
export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [cuser,setuser]=useState(JSON.parse(localStorage.getItem("user"))|| null);

    const login= async(inputs)=>{
        try{
            const res=await axios.post("http://localhost:8800/api/auth/login",inputs,{
             withCredentials:true
            });
            setuser(res.data);

        }catch(err){
            console.log(err.response.data);
        }
       
    }

    useEffect(()=>{
     localStorage.setItem("user",JSON.stringify(cuser));   
    },[cuser])
    return(
        <AuthContext.Provider value={{cuser,login}}>
            {children}
        </AuthContext.Provider>
    )
}