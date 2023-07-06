import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import styles from './ImgCard.module.css'
import srcSvgIcon from '../../assets/svg/close.svg'
import Loader from '../Loader/Loader'

const ImgCard = ({
    card,
    setCard,
    cardStatus,
    setCardStatus,
}) => {
  const [cardLoading, setCardLoading] = useState(true)

  const closeCardHandler = () => {
    setCardStatus(false)
    setCard(null)
  }

  useEffect(() => {
    setCardLoading(true)
    setTimeout(() => {
      setCardLoading(false)
    }, 500);
  }, [cardStatus])

  return (
    <>
      <div
        className={clsx(
          styles.container,
          cardStatus ? styles.show : styles.hide
        )}
        onClick={closeCardHandler}
      />
      {
        cardStatus
          && cardLoading
            ? <Loader />
            : (
              <div className={clsx(
                  styles.card,
                  cardStatus  ? styles.show : styles.hide
              )}>
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
            )
      }
    </>
  )
}

export default ImgCard