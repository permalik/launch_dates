import axios from 'axios';
import {Event} from '../models/event';
import type {AppProps} from 'next/app';
import {useEffect, useState} from 'react';

import Layout from '../components/Layout';

import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
	// @ts-ignore
	const [events, setEvents] = useState<Event>([]);
	const [selectedEvent, setSelectedEvent] = useState<Event | undefined>(undefined);
	const [editMode, setEditMode] = useState(false);

	useEffect(() => {
		axios.get('http://localhost:5000/api/events')
			.then(response => {
				setEvents(response.data);
			});
	}, []);

	function handleSelectEvent(id: string) {
		// @ts-ignore
		setSelectedEvent(events.find((x: { id: string; }) => x.id === id));
	}

	function handleCancelSelectEvent() {
		setSelectedEvent(undefined);
	}

	function handleFormOpen(id?: string) {
		id ? handleSelectEvent(id) : handleCancelSelectEvent();
		setEditMode(true);
	}

	function handleFormClose() {
		setEditMode(false);
	}

	return (
		<Layout openForm={handleFormOpen}>
			<Component {...pageProps}
								 cancelSelectEvent={handleCancelSelectEvent}
								 closeForm={handleFormClose}
								 editMode={editMode}
								 events={events}
								 openForm={handleFormOpen}
								 selectEvent={handleSelectEvent}
								 selectedEvent={selectedEvent}
			/>
		</Layout>
	);
}

export default MyApp;
