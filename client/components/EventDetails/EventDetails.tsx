import {Event} from '../../models/event';

import styles from '../../styles/EventDetails.module.css';

interface Props {
	cancelSelectEvent: () => void;
	event: Event;
	openForm: (id: string) => void;
}

const EventDetails = ({event, cancelSelectEvent, openForm}: Props) => {
	return (
		<article className={styles.eventCard} key={event.id}>
			<div className={styles.wrapper}>
				<header>
					<h2>{event.title}</h2>
					<p>{event.category}</p>
					<p>{event.description}</p>
				</header>
				<section>
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
				<section className={styles.controls}>
					<button className={styles.editButton}
									onClick={() => openForm(event.id)}>
						edit
					</button>
					<button className={styles.cancelButton} onClick={cancelSelectEvent}>
						cancel
					</button>
				</section>
			</div>
		</article>
	);
};

export default EventDetails;