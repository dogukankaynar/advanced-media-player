import React from 'react'
import styles from "./styles.module.css"
type ListItemProps = {
  item: any; // Music türüne göre güncelleyin
  index: number;
};
const ListItem:React.FC<ListItemProps> = ({item}) => {
  return (
    <div className={styles.container} id={item.id}>
      <img className={styles.img} src={item.img} alt="" />
      <p className={styles.title}>{item.title}</p>
      <p className={styles.desc}>{item.artist_name}</p>
    </div>
  )
}

export default ListItem