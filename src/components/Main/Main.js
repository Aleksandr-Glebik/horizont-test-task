import React from 'react'
import styles from './Main.module.css'
import { dataPhotos } from '../../data/dataPhotos'

const Main = () => {
  return (
    <div className={styles.main}>
        {dataPhotos.map(el => {
            return (
              <img
                className={styles.img}
                alt={el.name}
                key={el.id}
                src={el.path}
              />
            )
        })}
    </div>
  )
}

export default Main