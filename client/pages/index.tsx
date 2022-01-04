import type {NextPage} from 'next';
import Head from 'next/head';

import EventDashboard from '../components/EventDashboard';
import PrimarySection from '../components/PrimarySection';
import {Event} from '../models/event';

import styles from '../styles/Home.module.css';

interface Props {
	events: Event[];
	selectedEvent: Event | undefined;
	selectEvent: (id: string) => void;
	cancelSelectEvent: () => void;
}

const Home: ({
							 events,
							 selectedEvent,
							 selectEvent,
							 cancelSelectEvent
						 }: Props) => JSX.Element = ({events, selectedEvent, selectEvent, cancelSelectEvent}: Props) => {
	return (
		<PrimarySection>
			<Head>
				<title>Rocket Launch Dates</title>
				<meta name="description" content="Social app for rocket launch dates"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<h1 className={styles.dashboardHeading}>Launch Event Dashboard</h1>
			<EventDashboard events={events} selectEvent={selectEvent} selectedEvent={selectedEvent} cancelSelectEvent={cancelSelectEvent}/>
		</PrimarySection>
	);
};

export default Home;
