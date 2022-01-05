import {Event} from '../../models/event';

import EventDetails from '../EventDetails';
import EventForm from '../EventForm';
import EventList from '../EventList';

import styles from '../../styles/EventDashboard.module.css';

interface Props {
	cancelSelectEvent: () => void;
	closeForm: () => void;
	editMode: boolean;
	events: Event[];
	openForm: (id: string) => void;
	selectEvent: (id: string) => void;
	selectedEvent: Event | undefined;
}

const EventDashboard = ({
													cancelSelectEvent,
													closeForm,
													editMode,
													events,
													openForm,
													selectEvent,
													selectedEvent
												}: Props) => {
	return (
		<section className={styles.dashboard}>
			<EventList events={events} selectEvent={selectEvent}/>
			<div className={styles.cardControls}>
				{selectedEvent && !editMode && <EventDetails
            cancelSelectEvent={cancelSelectEvent}
            event={selectedEvent}
            openForm={openForm}
        />}
				{editMode && <EventForm
            event={selectedEvent}
            closeForm={closeForm}
        />}
			</div>
		</section>
	);
};

export default EventDashboard;