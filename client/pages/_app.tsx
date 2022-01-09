import agent from './api/agent';
import {Event} from '../models/event';
import type {AppProps} from 'next/app';
import {useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid';

import Layout from '../components/Layout';
import Loading from '../components/Loading';

import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
	// @ts-ignore
	const [events, setEvents] = useState<Event[]>([]);
	const [selectedEvent, setSelectedEvent] = useState<Event | undefined>(undefined);
	const [editMode, setEditMode] = useState(false);
	const [loading, setLoading] = useState(true);
	const [submitting, setSubmitting] = useState(false);

	useEffect(() => {
		agent.Events.list()
			.then(response => {
				let events: Event[] = [];
				response.forEach((event: any) => {
					event.date = event.date.split('T')[0];
					events.push(event);
				});
				setEvents(events);
				setLoading(false);
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
		setSubmitting(true);
		if (event.id) {
			agent.Events.update(event).then(() => {
				setEvents([...events.filter(n => n.id !== event.id), event]);
				setSelectedEvent(event);
				setEditMode(false);
				setSubmitting(false);
			});
		} else {
			event.id = uuid();
			agent.Events.create(event).then(() => {
				setEvents([...events, event]);
				setSelectedEvent(event);
				setEditMode(false);
				setSubmitting(false);
			});
		}
	}

	function handleDeleteEvent(id: string) {
		setSubmitting(true);
		agent.Events.delete(id).then(() => {
			setEvents([...events.filter(x => x.id !== id)]);
			setSubmitting(false);
		});
	}

	if (loading) return <Loading content={'Loading App'}/>;

	return (
		<Layout openForm={handleFormOpen}>
			<Component {...pageProps}
								 cancelSelectEvent={handleCancelSelectEvent}
								 closeForm={handleFormClose}
								 createOrEdit={handleCreateOrEditEvent}
								 deleteEvent={handleDeleteEvent}
								 editMode={editMode}
								 events={events}
								 openForm={handleFormOpen}
								 selectEvent={handleSelectEvent}
								 selectedEvent={selectedEvent}
								 submitting={submitting}
			/>
		</Layout>
	);
}

export default MyApp;
