import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const SideBarMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.item} onClick={() => navigate("/")}>
        <span className={`material-symbols-outlined ${styles.icon}  `}>
          home
        </span>
        <p>Anasayfa</p>
      </div>
      <span className={`material-symbols-outlined ${styles.menu}`}>collections_bookmark</span>
      <div className={styles.item} onClick={() => navigate("/search")}>
        <span className={`material-symbols-outlined ${styles.icon}`}>
          search
        </span>
        <p>Ara</p>
      </div>
    </div>
  );
};

export default SideBarMenu;
