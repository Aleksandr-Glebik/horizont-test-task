import React from 'react'
import styles from './Main.module.css'
import { dataPhotos } from '../../data/dataPhotos'
import { filterPhotoCategory } from '../../utils/filterPhotoCategory'
import { motion } from "framer-motion";

const Main = ({ showImgCard, category }) => {
  const arrPhotos = filterPhotoCategory(category, dataPhotos)

  return (
    <motion.section
      className={styles.main}
    >
        {
          arrPhotos.map((el, ind) => {
            return (
                <motion.img
                  key={el.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: ind * 0.01
                  }}
                  className={styles.img}
                  alt={el.name}
                  src={el.path}
                  onClick={() => showImgCard(el.id)}
                />
            )
          })
        }
    </motion.section>
  )
}

export default Main