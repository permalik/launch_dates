import {observer} from 'mobx-react-lite';
import {useEffect} from 'react';
import {useStore} from '../stores/store';

import EventList from '../components/EventList';
import Loading from '../components/Loading';
import PrimarySection from '../components/PrimarySection';
import Toolbar from '../components/Toolbar';

import styles from '../styles/EventDashboard.module.css';

const EventDashboard = () => {
	const {eventStore} = useStore();
	const {eventRegistry, loadEvents} = eventStore;

	useEffect(() => {
		if (eventRegistry.size <= 1) loadEvents();
	}, [eventRegistry.size, loadEvents]);

	if (eventStore.loadingInitial) return <Loading content={'Loading App'}/>;

	return (
		<PrimarySection>
			<h1 className={styles.headingOne}>Launch Dashboard</h1>
			<Toolbar/>
			<section className={styles.dashboard}>
				<EventList/>
				<div className={styles.cardControls}>
					Event Filters
				</div>
			</section>
		</PrimarySection>
	);
};

export default observer(EventDashboard);