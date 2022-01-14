import {observer} from 'mobx-react-lite';
import {useStore} from '../../stores/store';

import EventDetails from '../EventDetails';
import EventForm from '../EventForm';
import EventList from '../EventList';

import styles from '../../styles/EventDashboard.module.css';

const EventDashboard = () => {
	const {eventStore} = useStore();
	const {selectedEvent, editMode} = eventStore;

	return (
		<section className={styles.dashboard}>
			<EventList/>
			<div className={styles.cardControls}>
				{selectedEvent && !editMode && <EventDetails/>}
				{editMode && <EventForm/>}
			</div>
		</section>
	);
};

export default observer(EventDashboard);