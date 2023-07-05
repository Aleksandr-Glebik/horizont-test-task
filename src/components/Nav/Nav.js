import React from 'react'
import styles from './Nav.module.css'
import { dataPhotos } from '../../data/dataPhotos'
import { findAllCategory } from '../../utils/findAllCategory'

const Nav = ({ setCategory}) => {
  const arrCategory = findAllCategory(dataPhotos)
  
  const categoryClickHandler = (event) => {
    // console.log('event', event.target.textContent)
    setCategory(event.target.textContent)
  }

  return (
    <nav className={styles.nav}>
        <ul className={styles.list}>
            {
                arrCategory.map((item, ind) => (
                    <li
                      key={`${item}_${ind}`}
                      className={styles.item}
                      onClick={categoryClickHandler}
                    >
                        {item}
                    </li>
                  ))
            }
        </ul>
    </nav>
  )
}

export default Nav