import { createContext, useState, useContext } from "react";
import data from "../data/myData.json";

export type Music = {
  id: number;
  title: string;
  img: string;
  artist_name: string;
};

export type Artist = {
  id: number;
  name: string;
  artist_img: string;
};
type DataProviderProps = {
  children: React.ReactNode;
};

export type Albums = {
  name: string;
  url: string;
  year: number;
};

type DataContextType = {
  musicList: Music[];
  setMusicList: React.Dispatch<React.SetStateAction<Music[]>>;
  artistList: Artist[];
  setArtistList: React.Dispatch<React.SetStateAction<Artist[]>>;
  value: string|null;
  setValue: React.Dispatch<React.SetStateAction<string|null>>;
};

const DataContext = createContext<DataContextType>({} as DataContextType);

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [musicList, setMusicList] = useState<Music[]>(data.musicList);
  const [artistList, setArtistList] = useState<Artist[]>(data.artistList);
  const [value, setValue] = useState<string | null>(null);


  const values: DataContextType = {
    musicList,
    setMusicList,
    artistList,
    setArtistList,
    value,
    setValue,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};
const useDataList = () => useContext(DataContext);

export { useDataList, DataProvider };
