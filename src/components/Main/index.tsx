import React from 'react'
import MusicList from '../MusicList'
import styles from "./styles.module.css"
const Main:React.FC = () => {
  return (
    <div className={styles.container}>
      <MusicList/>
    </div>
  )
}

export default Main