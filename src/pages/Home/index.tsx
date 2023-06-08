import React from 'react'
import Main from '../../components/Main'
import SideBar from "../../components/SideBar"
import styles from "./style.module.css"
const Home:React.FC = () => {
  return (
    <div className={styles.container}>
        <SideBar/>
        <Main/>
    </div>
  )
}

export default Home