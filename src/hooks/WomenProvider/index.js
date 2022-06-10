import React, { createContext, useContext, useEffect, useState } from 'react';
import { getWomen } from '../services/women';


const WomenContext = createContext();

function WomenProvider({children}) {
  const [womenList, setWomen]= useState([])

  useEffect(()=>{
    getWomen().then((women)=>setWomen(women))
  },[])

  return (
    <WomenContext.Provider
    value={{
      womenList
    }}
    >
      {children}
    </WomenContext.Provider>
  );
}
 function useWomen(){
   const context = useContext(WomenContext)
   if(!context){
     throw new Error("the useWomen does not use without WomenProvider")
   }
   return context
 }

export { WomenProvider, useWomen };