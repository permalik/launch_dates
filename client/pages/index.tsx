import {observer} from 'mobx-react-lite';
import Head from 'next/head';
import Link from 'next/link';

import PrimarySection from '../components/PrimarySection';

import styles from '../styles/Home.module.css';

const Home = () => {
	return (
		<PrimarySection>
			<Head>
				<title>Rocket Launch Dates</title>
				<meta name="description" content="Social app for rocket launch dates"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<Link href={'/eventDashboard'} passHref>
				<button className={styles.dashboardButton}>
					Launch Dashboard
				</button>
			</Link>
		</PrimarySection>
	);
};

export default observer(Home);
