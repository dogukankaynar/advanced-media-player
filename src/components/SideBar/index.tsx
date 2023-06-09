import React from 'react'
import SideBarList from '../SideBarList'
import SideBarMenu from '../SideBarMenu'
import styles from "./styles.module.css"
const SideBar:React.FC = () => {
  return (
    <div className={styles.container}>
        <SideBarMenu/>
        <SideBarList/>
    </div>
  )
}

export default SideBar