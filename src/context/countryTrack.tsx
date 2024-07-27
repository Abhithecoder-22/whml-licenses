'use client'
import React, {useContext,createContext, ReactNode,useState} from 'react'


interface ICountryTrackContext{
   countryTrack:boolean
   setCountryTrack:  React.Dispatch<React.SetStateAction<boolean>>;
}

export const CountryTrackContext = createContext<ICountryTrackContext>({
  countryTrack:false,
  setCountryTrack:()=>{}
        
});

const CountryTrack = ({children}:{children:ReactNode}) => {
    const [countryTrack,setCountryTrack]=useState<boolean>(false)
    
  return (
  <CountryTrackContext.Provider value={{countryTrack,setCountryTrack}}>
    {children}
  </CountryTrackContext.Provider>
  )
}

export default CountryTrack
