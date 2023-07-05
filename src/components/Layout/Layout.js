
import React from 'react'
import styles from './Layout.module.css'
import Header from '../Header/Header'
import Main from '../Main/Main'

const Layout = () => {
  return (
    <div className={styles.layout}>
        <Header />
        <Main />
    </div>
  )
}

export default Layout