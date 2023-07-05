import React from 'react'
import clsx from 'clsx'
import styles from './ImgCard.module.css'
import srcSvgIcon from '../../assets/svg/close.svg'

const ImgCard = ({
    card,
    cardStatus,
    setCardStatus
}) => {
//   console.log('card', card)
//   console.log('cardStatus', cardStatus)
  const closeCardHandler = () => {
    setCardStatus('hide')
  }

  return (
    <>
        <div
          className={clsx(
            styles.container,
            cardStatus === 'show' ? styles.show : styles.hide
          )}
          onClick={closeCardHandler}
        />
        <div className={clsx(
            styles.card,
            cardStatus === 'show' ? styles.show : styles.hide
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
    </>
  )
}

export default ImgCard