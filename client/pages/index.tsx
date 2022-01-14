import {observer} from 'mobx-react-lite';
import {Event} from '../models/event';
import Head from 'next/head';

import EventDashboard from '../components/EventDashboard';
import PrimarySection from '../components/PrimarySection';
import Toolbar from '../components/Toolbar';

import styles from '../styles/Home.module.css';
import {useStore} from '../stores/store';

interface Props {
	deleteEvent: (id: string) => void;
	events: Event[];
	submitting: boolean;
}

const Home: ({
							 deleteEvent,
							 events,
							 submitting
						 }: Props) => JSX.Element = ({
																					 deleteEvent,
																					 events,
																					 submitting
																				 }: Props) => {
	return (
		<PrimarySection>
			<Head>
				<title>Rocket Launch Dates</title>
				<meta name="description" content="Social app for rocket launch dates"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<Toolbar/>
			<h1 className={styles.dashboardHeading}>Launch Event Dashboard</h1>
			<EventDashboard
				deleteEvent={deleteEvent}
				events={events}
				submitting={submitting}
			/>
		</PrimarySection>
	);
};

export default observer(Home);
