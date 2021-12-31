import axios from 'axios';
import type {AppProps} from 'next/app';
import {useEffect, useState} from 'react';

import Layout from '../components/Layout';

import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:5000/api/events')
			.then(response => {
				console.log(response);
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
