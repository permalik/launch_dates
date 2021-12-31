import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Key, ReactChild, ReactFragment, ReactPortal } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = ({events}: any) => {
  return (
    <div>
      <Head>
        <title>Rocket Launch Dates</title>
        <meta name="description" content="Social app for rocket launch dates"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <h1>Rocket Launch Dates</h1>
      <ul className={styles.list}>
        {events.map((event: { id: Key | null | undefined; title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; category: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; description: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; venue: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; city: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; state: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; date: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) => (
          <li key={event.id}>
            <header>
              <h2>{event.title}</h2>
              <p>{event.category}</p>
              <p>{event.description}</p>
            </header>
            <section>
              <p>{event.venue}</p>
              <p>{event.city}</p>
              <p>{event.state}</p>
              <p>{event.date?.toString().slice(0, 10)}</p>
            </section>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
