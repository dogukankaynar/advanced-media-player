import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const SideBarMenu:React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.item} onClick={()=>navigate("/")} >
        <span className={`material-symbols-outlined ${styles.icon}  `}>home</span>
        Anasayfa
      </div>
      <div className={styles.item} onClick={()=>navigate("/search")}>
        <span className={`material-symbols-outlined ${styles.icon}`}>
          search
        </span>
        Ara
      </div>
    </div>
  );
};

export default SideBarMenu;
