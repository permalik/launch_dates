import {Event} from '../../models/event';

import styles from '../../styles/EventDashboard.module.css';
import EventDetails from '../EventDetails';
import EventForm from '../EventForm/EventForm';

interface Props {
	events: Event[];
}

const EventDashboard = ({events}: Props) => {
	return (
		<section className={styles.dashboard}>
			<ul className={styles.cardList}>
				{events.map((event: any) => (
					<li className={styles.eventCard} key={event.id}>
						<header className={styles.cardHeader}>
							<div>
								<h2>{event.title}</h2>
								<p>{event.category}</p>
								<p>{event.venue}</p>
							</div>
							<button className={styles.viewButton}>
								view
							</button>
						</header>
						<section className={styles.cardBody}>
							<p>{event.description}</p>
						</section>
					</li>
				))}
			</ul>
			<div className={styles.cardControls}>
				{events[0] && <EventDetails event={events[0]}/>}
				<EventForm/>
			</div>
		</section>
	);
};

export default EventDashboard;