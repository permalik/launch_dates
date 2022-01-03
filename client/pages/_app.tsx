import axios from 'axios';
import {Event} from '../models/event';
import type {AppProps} from 'next/app';
import {useEffect, useState} from 'react';

import Layout from '../components/Layout';

import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
	// @ts-ignore
	const [events, setEvents] = useState<Event>([]);

	useEffect(() => {
		axios.get('http://localhost:5000/api/events')
			.then(response => {
				setEvents(response.data);
			});
	}, []);

	return (
		<Layout>
			<Component {...pageProps} events={events}/>
		</Layout>
	);
}

export default MyApp;
