import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { useState } from 'react'
import { MdClose } from 'react-icons/md'

export default function SignInButton() {
  const [isLogged, setIsLogged] = useState(false)

  function handleLogClick() {
    setIsLogged(!isLogged)
  }

  return (
    <>
      {!isLogged ? (
        <button
          className={`${styles.signInButton} ${styles.buttonContainer}`}
          onClick={handleLogClick}>
          <FaGithub />
          <span>Sign In with GitHub</span>
        </button>
      ) : (
        <button className={`${styles.signOutButton} ${styles.buttonContainer}`}>
          <FaGithub />
          <span>jeanmrtns</span>
          <MdClose className={styles.close} onClick={handleLogClick} />
        </button>
      )}
    </>
  )
}
