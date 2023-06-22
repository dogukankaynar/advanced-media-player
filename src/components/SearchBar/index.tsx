import React from "react";
import { useDataList } from "../../context/DataContext";
import styles from "./style.module.css";
const SearchBar: React.FC = () => {

  const {value,setValue}=useDataList()


  return (
    <div className={styles.container}>
      <span className={`material-symbols-outlined ${styles.icon}`}>
        arrow_back_ios
      </span>
      <span className={`material-symbols-outlined ${styles.icon}`}>
        arrow_forward_ios
      </span>
      <input className={styles.searchbar} value={value||""} onChange={(e)=>setValue(e.target.value)} type="text" />
      <span className={`material-symbols-outlined ${styles.searchIcon}`}>
        search
      </span>
    </div>
  );
};

export default SearchBar;
