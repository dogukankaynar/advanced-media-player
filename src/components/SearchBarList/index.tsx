import React, { useEffect, useState } from "react";
import { Music, useDataList } from "../../context/DataContext";
import styles from "./style.module.css";

const SearchBarList: React.FC = () => {
  const { musicList, value } = useDataList();
  const [newMusicList,setNewMusicList]=useState<Music[]>([])
  console.log(value);
  console.log(newMusicList);


  useEffect(()=>{
    const filteredMusicList:any = musicList.filter((music) => music.artist_name.toLocaleLowerCase() === value?.toLocaleLowerCase()); 
    setNewMusicList(filteredMusicList);

  },[musicList, value])

  return (
    <div className={styles.container}>
      <div className={`${styles.header}`}>
        <p className={`${styles.yil} ${styles.padding} ${styles.color}`}>#</p>
        <p className={`${styles.baslik} ${styles.padding} ${styles.color}`}>
          Başlık
        </p>
        <p className={`${styles.album} ${styles.padding} ${styles.color}`}>
          Album
        </p>
      </div>
      <hr />
      <div className={styles.main}>
        {
          value?newMusicList.map((music, index) => (
            <div className={styles.item} key={index}>
              <p className={`${styles.itemYil} ${styles.flex}`}>{music.id}</p>
              <div className={`${styles.itemTitle} `}>
                <img src={music.img} alt="" />
                <div className={styles.flex}>
                  <p className={styles.descTitle}>{music.title}</p>
                  <p className={styles.descP}>{music.artist_name}</p>
                </div>
              </div>
              <p className={`${styles.itemAlbum} ${styles.flex} `}>Album</p>
            </div>)):musicList.map((music, index) => (
            <div className={styles.item} key={index}>
              <p className={`${styles.itemYil} ${styles.flex}`}>{music.id}</p>
              <div className={`${styles.itemTitle} `}>
                <img src={music.img} alt="" />
                <div className={styles.flex}>
                  <p className={styles.descTitle}>{music.title}</p>
                  <p className={styles.descP}>{music.artist_name}</p>
                </div>
              </div>
              <p className={`${styles.itemAlbum} ${styles.flex} `}>Album</p>
            </div>))
        }

        {/* {musicList.map((music, index) => (
          <div className={styles.item} key={index}>
            <p className={`${styles.itemYil} ${styles.flex}`}>{music.id}</p>
            <div className={`${styles.itemTitle} `}>
              <img src={music.img} alt="" />
              <div className={styles.flex}>
                <p className={styles.descTitle}>{music.title}</p>
                <p className={styles.descP}>{music.artist_name}</p>
              </div>
            </div>
            <p className={`${styles.itemAlbum} ${styles.flex} `}>Album</p>
          </div>
        ))} */}
        {/* <div className={styles.item}>
          <div className={`${styles.itemTitle} `}>
            <img src="https://upload.wikimedia.org/wikipedia/tr/f/ff/Warriors_of_the_World_%28Manowar_album%29_cover_art.jpg" alt="" />
            <div className={styles.flex}>
              <p className={styles.descTitle}>Manowar</p>
              <p className={styles.descP}>Manowar</p>
            </div>
          </div>
          <p className={`${styles.itemAlbum} ${styles.flex} `}>Album</p>
          <p className={`${styles.itemYil} ${styles.flex}`}>Yıl</p>
        </div> */}
      </div>
    </div>
  );
};

export default SearchBarList;
