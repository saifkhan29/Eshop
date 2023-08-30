import React from 'react'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.main}>Home
    <h2 className={styles['sub-main']}>sub main</h2>
    </div>
  )
}

export default Home