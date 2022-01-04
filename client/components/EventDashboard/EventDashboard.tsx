import {Event} from '../../models/event';

import EventDetails from '../EventDetails';
import EventForm from '../EventForm';
import EventList from '../EventList';

import styles from '../../styles/EventDashboard.module.css';

interface Props {
	events: Event[];
	selectedEvent: Event | undefined;
	selectEvent: (id: string) => void;
	cancelSelectEvent: () => void;
}

const EventDashboard = ({events, selectedEvent, selectEvent, cancelSelectEvent}: Props) => {
	return (
		<section className={styles.dashboard}>
			<EventList events={events} selectEvent={selectEvent}/>
			<div className={styles.cardControls}>
				{selectedEvent && <EventDetails event={selectedEvent} cancelSelectEvent={cancelSelectEvent}/>}
				<EventForm/>
			</div>
		</section>
	);
};

export default EventDashboard;