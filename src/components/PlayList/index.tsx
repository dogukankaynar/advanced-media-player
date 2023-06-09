import React from "react";
import PlayListItem from "../PlayListItem";
import styles from "./styles.module.css";
import { DataList } from "../../context/DataContext";

const PlayList: React.FC = () => {
  const { artistList } = DataList();
  return (
    <div className={styles.container}>
      <div>
        <h1>Senin Playlistin</h1>
      </div>
      <div className={styles.row}>
        {artistList.map((item, index) => (
          <PlayListItem key={index} item={item} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default PlayList;
