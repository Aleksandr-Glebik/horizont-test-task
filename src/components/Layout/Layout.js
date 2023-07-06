
import React, { useState, useEffect } from 'react'
import styles from './Layout.module.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import ImgCard from '../ImgCard/ImgCard'
import Loader from '../Loader/Loader'
import { dataPhotos } from '../../data/dataPhotos'

const Layout = () => {
  const [card, setCard] = useState(null)
  const [cardStatus, setCardStatus] = useState(false)
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(true)

  const showImgCard = (id) => {
    setCard(dataPhotos.find(item => item.id === id))
    setCardStatus(true)
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  useEffect(() => {
    if (category) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 500);
    }
  }, [category])

  return (
    <div className={styles.layout}>
        <Header
          setCategory={setCategory}
          category={category}
        />
        {
          loading
            ? <Loader />
            : (
                <Main
                  showImgCard={showImgCard}
                  category={category}
                />
            )
        }
        <ImgCard
          card={card}
          setCard={setCard}
          cardStatus={cardStatus}
          setCardStatus={setCardStatus}
        />
    </div>
  )
}

export default Layout