import React from 'react'
import styles from './Nav.module.css'
import { dataPhotos } from '../../data/dataPhotos'
import { findAllCategory } from '../../utils/findAllCategory'

const Nav = () => {
  const arrCategory = findAllCategory(dataPhotos)

  return (
    <nav className={styles.nav}>
        <ul className={styles.list}>
            {
                arrCategory.map((item, ind) => (
                    <li
                      key={`${item}_${ind}`}
                      className={styles.item}
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