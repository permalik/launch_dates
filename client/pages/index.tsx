import type {NextPage} from 'next';
import {Event} from '../models/event';
import Head from 'next/head';


import EventDashboard from '../components/EventDashboard';
import PrimarySection from '../components/PrimarySection';
import Toolbar from '../components/Toolbar';

import styles from '../styles/Home.module.css';

interface Props {
	cancelSelectEvent: () => void;
	closeForm: () => void;
	createOrEdit: () => void;
	editMode: boolean;
	events: Event[];
	openForm: (id: string) => void;
	selectEvent: (id: string) => void;
	selectedEvent: Event | undefined;
}

const Home: ({
							 cancelSelectEvent,
							 closeForm,
							 createOrEdit,
							 editMode,
							 events,
							 openForm,
							 selectEvent,
							 selectedEvent,
						 }: Props) => JSX.Element = ({
																					 cancelSelectEvent,
																					 closeForm,
																					 createOrEdit,
																					 editMode,
																					 events,
																					 openForm,
																					 selectEvent,
																					 selectedEvent
																				 }: Props) => {
	return (
		<PrimarySection>
			<Head>
				<title>Rocket Launch Dates</title>
				<meta name="description" content="Social app for rocket launch dates"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<Toolbar openForm={openForm}/>
			<h1 className={styles.dashboardHeading}>Launch Event Dashboard</h1>
			<EventDashboard
				cancelSelectEvent={cancelSelectEvent}
				closeForm={closeForm}
				createOrEdit={createOrEdit}
				editMode={editMode}
				events={events}
				openForm={openForm}
				selectEvent={selectEvent}
				selectedEvent={selectedEvent}
			/>
		</PrimarySection>
	);
};

export default Home;
