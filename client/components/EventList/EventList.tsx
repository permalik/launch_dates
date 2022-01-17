import {observer} from 'mobx-react-lite';
import Link from 'next/link';
import {Fragment, SyntheticEvent, useState} from 'react';
import {useStore} from '../../stores/store';

import styles from '../../styles/EventList.module.css';

const EventList = () => {
	const {eventStore} = useStore();
	const {deleteEvent, eventsByDate, loading} = eventStore;
	const {groupedEvents} = eventStore;

	const [target, setTarget] = useState('');

	function handleEventDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
		setTarget(e.currentTarget.name);
		deleteEvent(id);
	}

	return (
		<section>
			{groupedEvents.map(([group, events]) => (
				<Fragment key={group}>
					<h2>{group}</h2>
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
										<Link href={`/events/${event.id}`} passHref>
											<button className={styles.viewButton}>
												view
											</button>
										</Link>
										<button
											className={styles.deleteButton}
											name={event.id}
											onClick={(e) => handleEventDelete(e, event.id)}
										>
											{loading && target === event.id ? 'Loading...' : 'delete'}
										</button>
									</div>
								</header>
								<section className={styles.cardBody}>
									<p>{event.description}</p>
								</section>
							</li>
						))}
					</ul>
				</Fragment>
			))}
		</section>
	);
};

export default observer(EventList);