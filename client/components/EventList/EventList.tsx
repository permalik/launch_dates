import styles from '../../styles/EventDashboard.module.css';
import {Event} from '../../models/event';

interface Props {
	events: Event[];
}

const EventList = ({events}: Props) => {
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
	);
};

export default EventList;