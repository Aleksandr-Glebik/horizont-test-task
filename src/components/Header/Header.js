import React from 'react'
import styles from './Header.module.css'
import Nav from '../Nav/Nav'

const Header = ({ setCategory }) => {
  return (
    <div className={styles.header}>
        <h1 className={styles.title}>Photo album</h1>
        <Nav setCategory={setCategory} />
    </div>
  )
}

export default Header