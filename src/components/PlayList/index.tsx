import React from "react";
import PlayListItem from "../PlayListItem";
import styles from "./styles.module.css";
import { useDataList } from "../../context/DataContext";

const PlayList: React.FC = () => {
  const { artistList } = useDataList();
  return (
    <div className={styles.container}>
      <div>
        <h1>Senin Playlistin</h1>
      </div>
      <div className={styles.row}>
        {artistList.map((item, index) => {
          if(index >5) return null;
          return <PlayListItem key={index} item={item} id={item.id} />
        }
        )}
      </div>
    </div>
  );
};

export default PlayList;
