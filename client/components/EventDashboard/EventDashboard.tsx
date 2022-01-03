import {Event} from '../../models/event';

import styles from '../../styles/EventDashboard.module.css';

interface Props {
	events: Event[];
}

const EventDashboard = ({events}: Props) => {
	return (
		<ul className={styles.cardList}>
			{events.map((event: any) => (
				<li className={styles.eventCard} key={event.id}>
					<header className={styles.cardHeader}>
						<h2>{event.title}</h2>
						<p>{event.category}</p>
						<p>{event.description}</p>
					</header>
					<section className={styles.cardBody}>
						<p>{event.venue}</p>
						<p>
							{event.city}
							<span>, </span>
							<span>
									{event.state}
								</span>
						</p>
						<p>{event.date?.toString().slice(0, 10)}</p>
					</section>
				</li>
			))}
		</ul>
	);
};

export default EventDashboard;