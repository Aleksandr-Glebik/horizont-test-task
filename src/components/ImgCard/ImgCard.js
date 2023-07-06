import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import styles from './ImgCard.module.css'
import srcSvgIcon from '../../assets/svg/close.svg'
import Loader from '../Loader/Loader'
import { motion, AnimatePresence } from "framer-motion";

const ImgCard = ({
    card,
    setCard,
}) => {
  const [cardLoading, setCardLoading] = useState(true)

  const closeCardHandler = () => {
      setCard(null)
  }

  useEffect(() => {
    if (!card) return
    setCardLoading(true)
    setTimeout(() => {
      setCardLoading(false)
    }, 500);
  }, [card])

  return (
    <>
      <div
        className={clsx(
          styles.container,
          !!card ? styles.show : styles.hide
        )}
        onClick={closeCardHandler}
      />
      <AnimatePresence>
        {
          !!card
            && cardLoading
              ? <Loader />
              : (
                  <motion.div
                    initial={{ y: -200 }}
                    animate={{ y: 0 }}
                    exit={{ y: -200 }}
                    transition={{ duration: 1 }}
                    className={clsx(
                      styles.card,
                      !!card ? styles.show : styles.hide
                    )}
                  >
                    <div style={{position: 'relative', height: 'inherit' }}>
                      <img
                        className={styles.svg}
                        alt='close-icon'
                        src={srcSvgIcon}
                        onClick={closeCardHandler}
                      />
                      <h2
                        className={styles.title}
                      >
                          {card?.name}
                      </h2>
                      <img
                        className={styles.img}
                        alt='card'
                        src={card?.path}
                      />
                      <p className={styles.text}>
                          {card?.description}
                      </p>
                      </div>
                  </motion.div>
              )
        }
      </AnimatePresence>
    </>
  )
}

export default ImgCard