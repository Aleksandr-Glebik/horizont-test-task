import React from 'react'
import clsx from 'clsx'
import styles from './Nav.module.css'
import { dataPhotos } from '../../data/dataPhotos'
import { findAllCategory } from '../../utils/findAllCategory'

const Nav = ({ setCategory, category }) => {
  const arrCategory = findAllCategory(dataPhotos)

  const categoryClickHandler = (event) => {
    setCategory(event.target.textContent)
  }

  return (
    <nav className={styles.nav}>
        <ul className={styles.list}>
            {
                arrCategory.map((item, ind) => (
                    <li
                      key={`${item}_${ind}`}
                      className={clsx(
                        styles.item,
                        category === item ? styles.active : ''
                      )}
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