import {observer} from 'mobx-react-lite';
import type {AppProps} from 'next/app';
import {useEffect} from 'react';
import {store, StoreContext, useStore} from '../stores/store';

import Layout from '../components/Layout';
import Loading from '../components/Loading';

import '../styles/globals.css';
import styles from '../styles/Toolbar.module.css';

function MyApp({Component, pageProps}: AppProps) {
	const {eventStore} = useStore();
	const {events} = eventStore;

	useEffect(() => {
		eventStore.loadEvents();
	}, [eventStore]);

	if (eventStore.loadingInitial) return <Loading content={'Loading App'}/>;

	return (
		<StoreContext.Provider value={store}>
			<Layout>
				<Component {...pageProps}/>
			</Layout>
		</StoreContext.Provider>
	);
}

export default observer(MyApp);
