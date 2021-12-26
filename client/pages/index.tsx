import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = ({events}: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>LaunchDates</title>
        <meta name="description" content="Rocket launch events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        {events.map((event: any) => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home
