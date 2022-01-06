import axios from 'axios';
import {Event} from '../models/event';
import type {AppProps} from 'next/app';
import {useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid';

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
		setEditMode(true);
		id ? handleSelectEvent(id) : handleCancelSelectEvent();
	}

	function handleFormClose() {
		setEditMode(false);
	}

	function handleCreateOrEditEvent(event: Event) {
		event.id
			// @ts-ignore
			? setEvents([...events.filter(n => n.id !== event.id), event])
			// @ts-ignore
			: setEvents([...events, {...event, id: uuid()}]);
		setEditMode(false);
		setSelectedEvent(event);
	}

	return (
		<Layout openForm={handleFormOpen}>
			<Component {...pageProps}
								 cancelSelectEvent={handleCancelSelectEvent}
								 closeForm={handleFormClose}
								 createOrEdit={handleCreateOrEditEvent}
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
