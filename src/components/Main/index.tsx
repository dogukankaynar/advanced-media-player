import React from 'react'
import MusicList from '../MusicList'
import PlayList from '../PlayList'
import styles from "./styles.module.css"
const Main:React.FC = () => {
  return (
    <div className={styles.container}>
      <PlayList/>
      <MusicList/>
    </div>
  )
}

export default Main