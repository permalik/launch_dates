import type {NextPage} from 'next';
import Head from 'next/head';
import {Key, ReactChild, ReactFragment, ReactPortal} from 'react';

import PrimarySection from '../components/PrimarySection';

import styles from '../styles/Home.module.css';

const Home: NextPage = ({events}: any) => {
	return (
		<PrimarySection>
			<Head>
				<title>Rocket Launch Dates</title>
				<meta name="description" content="Social app for rocket launch dates"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<h1 className={styles.headingOne}>Rocket Launch Dates</h1>
			<ul className={styles.cardList}>
				{events.map((event: { id: Key | null | undefined; title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; category: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; description: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; venue: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; city: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; state: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; date: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) => (
					<li className={styles.eventCard} key={event.id}>
						<header className={styles.cardHeader}>
							<h2>{event.title}</h2>
							<p>{event.category}</p>
							<p>{event.description}</p>
						</header>
						<section className={styles.cardBody}>
							<p>{event.venue}</p>
							<p>
								{event.city}
								<span>, </span>
								<span>
									{event.state}
								</span>
							</p>
							<p>{event.date?.toString().slice(0, 10)}</p>
						</section>
					</li>
				))}
			</ul>
		</PrimarySection>
	);
};

export default Home;
