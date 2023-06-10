import React from "react";
import { Artist } from "../../context/DataContext";
import styles from "./styles.module.css";
type ListItemProps = {
  item: Artist; // Music türüne göre güncelleyin
  id: number;
};

const PlayListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={item.artist_img} alt="" />
      <div className={styles.flex}>
        <h1 className={styles.title}>{item.name}</h1>
      </div>
    </div>
  );
};

export default PlayListItem;
