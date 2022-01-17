import {observer} from 'mobx-react-lite';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Toolbar from '../../components/Toolbar';
import {useEffect} from 'react';
import {useStore} from '../../stores/store';

import PrimarySection from '../../components/PrimarySection';
import Loading from '../../components/Loading';

import styles from '../../styles/EventDetails.module.css';

const EventID = () => {
	const {eventStore} = useStore();
	const {loadEvent, loadingInitial, selectedEvent: event} = eventStore;
	const router = useRouter();
	const {eventID} = router.query;

	useEffect(() => {
		if (eventID) loadEvent(eventID as string);
	}, [eventID, loadEvent]);


	if (loadingInitial || !event) return <Loading content={'Loading...'}/>;

	return (
		<PrimarySection>
			<h1 className={styles.headingOne}>Edit Interface</h1>
			<Toolbar/>
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
							<span>{event.state}</span>
						</p>
						<p>{event.date?.toString().slice(0, 10)}</p>
					</section>
					<section className={styles.controls}>
						<Link href={`/manage/${event.id}`} passHref>
							<button className={styles.editButton}>
								edit
							</button>
						</Link>
						<Link href={'/eventDashboard'} passHref>
							<button className={styles.cancelButton}>
								cancel
							</button>
						</Link>
					</section>
				</div>
			</article>
		</PrimarySection>
	);
};

export default observer(EventID);