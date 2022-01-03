import type {NextPage} from 'next';
import Head from 'next/head';

import EventDashboard from '../components/EventDashboard';
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
			<h1 className={styles.dashboardHeading}>Launch Event Dashboard</h1>
			<EventDashboard events={events} />
		</PrimarySection>
	);
};

export default Home;
