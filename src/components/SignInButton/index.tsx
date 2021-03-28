import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { useSession, signIn, signOut } from 'next-auth/client'

export default function SignInButton() {
  const [session] = useSession()

  return (
    <>
      {!session ? (
        <button
          className={`${styles.signInButton} ${styles.buttonContainer}`}
          onClick={() => signIn('github')}>
          <FaGithub />
          <span>Sign In with GitHub</span>
        </button>
      ) : (
        <button
          className={`${styles.signOutButton} ${styles.buttonContainer}`}
          onClick={() => signOut()}>
          <FaGithub />
          <span>{session.user.name}</span>
          <MdClose className={styles.close} />
        </button>
      )}
    </>
  )
}
