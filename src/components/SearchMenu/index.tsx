import React from "react";
import SearchBar from "../SearchBar";
import SearchBarList from "../SearchBarList";
import styles from "./style.module.css";
const SearchMenu: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <SearchBar />
      </div>
      <SearchBarList />
    </div>
  );
};

export default SearchMenu;
