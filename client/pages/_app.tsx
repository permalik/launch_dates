import axios from 'axios';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/events').then(response => {
      console.log(response);
      setEvents(response.data);
    })
  }, []);

  return <Component {...pageProps} events={events} />
}
