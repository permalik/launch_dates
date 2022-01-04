import {Event} from '../../models/event';

import styles from '../../styles/EventDashboard.module.css';
import EventDetails from '../EventDetails';
import EventForm from '../EventForm';
import EventList from '../EventList';

interface Props {
	events: Event[];
	selectedEvent: Event;
	selectEvent: (id: string) => void;
	cancelSelectEvent: () => void;
}

const EventDashboard = ({events, selectedEvent, selectEvent, cancelSelectEvent}: Props) => {
	return (
		<section className={styles.dashboard}>
			<EventList events={events}/>
			<div className={styles.cardControls}>
				{events[0] && <EventDetails event={events[0]}/>}
				<EventForm/>
			</div>
		</section>
	);
};

export default EventDashboard;