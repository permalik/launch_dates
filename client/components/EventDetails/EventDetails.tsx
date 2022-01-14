import styles from '../../styles/EventDetails.module.css';
import {useStore} from '../../stores/store';

import Loading from '../Loading';

const EventDetails = () => {

	const {eventStore} = useStore();
	const {cancelSelectedEvent, openForm, selectedEvent: event} = eventStore;

	if (!event) return <Loading content={'Loading...'}/>;

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
					<button className={styles.cancelButton} onClick={cancelSelectedEvent}>
						cancel
					</button>
				</section>
			</div>
		</article>
	);
};

export default EventDetails;