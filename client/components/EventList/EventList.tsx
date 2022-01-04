import {Event} from '../../models/event';

import styles from '../../styles/EventDashboard.module.css';

interface Props {
	events: Event[];
	selectEvent: (id: string) => void;
}

const EventList = ({events, selectEvent}: Props) => {
	return (
		<ul className={styles.cardList}>
			{events.map((event: any) => (
				<li className={styles.eventCard} key={event.id}>
					<header className={styles.cardHeader}>
						<div>
							<h2>{event.title}</h2>
							<p>{event.category}</p>
							<p>{event.venue}</p>
						</div>
						<button className={styles.viewButton} onClick={() => selectEvent(event.id)}>
							view
						</button>
					</header>
					<section className={styles.cardBody}>
						<p>{event.description}</p>
					</section>
				</li>
			))}
		</ul>
	);
};

export default EventList;