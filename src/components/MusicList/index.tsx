import React from "react";
import styles from "./styles.module.css";
import ListItem from "../ListItem";
import { useDataList } from "../../context/DataContext";


const MusicList: React.FC = () => {
  const { musicList } = useDataList();
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Sana özel bölümler</h1>
      </div>
      <div className={styles.row}>
        {musicList.map((item, index) => (
          <ListItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default MusicList;
