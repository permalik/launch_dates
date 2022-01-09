import {SyntheticEvent, useState} from 'react';
import {Event} from '../../models/event';

import styles from '../../styles/EventList.module.css';

interface Props {
	events: Event[];
	deleteEvent: (id: string) => void;
	selectEvent: (id: string) => void;
	submitting: boolean;
}

const EventList = ({events, deleteEvent, selectEvent, submitting}: Props) => {
	const [target, setTarget] = useState('');

	function handleEventDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
		setTarget(e.currentTarget.name);
		deleteEvent(id);
	}

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
						<div className={styles.buttonContainer}>
							<button
								className={styles.viewButton}
								onClick={() => selectEvent(event.id)}
							>
								view
							</button>
							<button
								className={styles.deleteButton}
								name={event.id}
								onClick={(e) => handleEventDelete(e, event.id)}
							>
								{submitting && target === event.id ? 'Loading...' : 'delete'}
							</button>
						</div>
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