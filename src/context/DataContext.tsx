import { createContext, useState,useContext } from "react";
import data from "../data/myData.json"

export type Music={
    id:number,
    title:string,
    img:string,
    artist_name:string
}

export type Artist={
    id:number,
    name:string,
    artist_img:string
}
type DataProviderProps={
    children:React.ReactNode;
}

type DataContextType={
    musicList:Music[],
    setMusicList:React.Dispatch<React.SetStateAction<Music[]>>,
    artistList:Artist[]
    setArtistList:React.Dispatch<React.SetStateAction<Artist[]>>,
}

const DataContext = createContext<DataContextType>({} as DataContextType)

const DataProvider:React.FC<DataProviderProps> = ({children})=>{
    
    const[musicList,setMusicList]=useState<Music[]>(data.musicList)
    const[artistList,setArtistList]=useState<Artist[]>(data.artistList)

    const values :DataContextType={
        musicList,
        setMusicList,
        artistList,
        setArtistList
    }


return(
    <DataContext.Provider value={values}>{children}</DataContext.Provider>
)
};
const useDataList = () => useContext(DataContext);

export{useDataList,DataProvider}