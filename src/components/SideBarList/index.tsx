import React from "react";
import styles from "./styles.module.css";
import { useDataList } from "../../context/DataContext";
import SideBarListItem from "../SideBarListItem";

const SideBarList: React.FC = () => {
  const { musicList } = useDataList();

  return (
    <div className={styles.container}>
      {musicList.map((item, index) => (
        <SideBarListItem key={item.id + index} item={item} index={index} />
      ))}
    </div>
  );
};

export default SideBarList;
