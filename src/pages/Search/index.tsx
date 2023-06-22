import React from 'react'
import SideBar from '../../components/SideBar';
import SearchMenu from '../../components/SearchMenu';
import styles from "./style.module.css"
const Search:React.FC = () => {
  return (
    <div className={styles.container}>
        <SideBar/>
        <SearchMenu />
    </div>
  )
}

export default Search