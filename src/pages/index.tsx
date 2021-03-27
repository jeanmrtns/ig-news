import Head from 'next/head'
import styles from './home.module.scss'
import SubscribeButton from '../components/SubscribeButton'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.content}>
        <div>
          <span>👏 Hey, welcome</span>
          <h1>
            News about <br />
            the <span>React</span> world
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton />
        </div>
        <img src='images/mulher.svg' alt='Girl Coding' />
      </main>
    </>
  )
}
