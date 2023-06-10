import React from "react";
import { Music } from "../../context/DataContext";
import styles from "./styles.module.css";
type ListItemProps = {
  item: Music; // Music türüne göre güncelleyin
  index: number;
};
const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <div className={styles.container} id={`${item.id}`}>
      <img className={styles.img} src={item.img} alt="" />
      <div className={styles.textContainer}>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.desc}>{item.artist_name}</p>
      </div>
    </div>
  );
};

export default ListItem;
