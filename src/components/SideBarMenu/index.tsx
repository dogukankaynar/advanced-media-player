import React from "react";
import styles from "./styles.module.css";

const SideBarMenu:React.FC = () => {

  return (
    <div className={styles.container}>
      <div className={styles.item} >
        <span className={`material-symbols-outlined ${styles.icon}  `}>home</span>{" "}
        Anasayfa
      </div>
      <div className={styles.item}>
        <span className={`material-symbols-outlined ${styles.icon}`}>
          search
        </span>
        Ara
      </div>
    </div>
  );
};

export default SideBarMenu;
