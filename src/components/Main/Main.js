import React from 'react'
import styles from './Main.module.css'
import { dataPhotos } from '../../data/dataPhotos'
import { filterPhotoCategory } from '../../utils/filterPhotoCategory'

const Main = ({ showImgCard, category }) => {
  const arrPhotos = filterPhotoCategory(category, dataPhotos)

  return (
    <div className={styles.main}>
        {
          arrPhotos.map(el => {
            return (
              <img
                className={styles.img}
                alt={el.name}
                key={el.id}
                src={el.path}
                onClick={() => showImgCard(el.id)}
              />
            )
          })
        }
    </div>
  )
}

export default Main