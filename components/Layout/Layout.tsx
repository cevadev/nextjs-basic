import React from 'react'

import NavBar from '@components/Navbar/Navbar'
import styles from './layout.module.css'
// Layout recibe un componente children para renderizar
const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <NavBar />
      {children}
      <footer>this is the footer</footer>
    </div>
  )
}

export default Layout
