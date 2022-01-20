import {observer} from 'mobx-react-lite';
import type {AppProps} from 'next/app';
import {store, StoreContext} from '../stores/store';

import Layout from '../components/Layout';

import 'react-calendar/dist/Calendar.css';
import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
	return (
		<StoreContext.Provider value={store}>
			<Layout>
				<Component {...pageProps}/>
			</Layout>
		</StoreContext.Provider>
	);
}

export default observer(MyApp);
