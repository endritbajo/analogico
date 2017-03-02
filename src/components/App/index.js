import React from 'react'
import styles from './style.css'

const App = ({ children }) => (
  <div className={styles.appContainer}>
    {children}
  </div>
)

export default App;
