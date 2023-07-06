
import React, { useState } from 'react'
import styles from './Layout.module.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import ImgCard from '../ImgCard/ImgCard'
import { dataPhotos } from '../../data/dataPhotos'

const Layout = () => {
  const [card, setCard] = useState(null)
  const [cardStatus, setCardStatus] = useState('hide')
  const [category, setCategory] = useState('')
  // console.log('category', category)

  const showImgCard = (id) => {
    // console.log('id', id)
    setCard(dataPhotos.find(item => item.id === id))
    setCardStatus('show')
  }

  return (
    <div className={styles.layout}>
        <Header
          setCategory={setCategory}
          category={category}
        />
        <Main
          showImgCard={showImgCard}
          category={category}
        />
        <ImgCard
          card={card}
          cardStatus={cardStatus}
          setCardStatus={setCardStatus}
        />
    </div>
  )
}

export default Layout