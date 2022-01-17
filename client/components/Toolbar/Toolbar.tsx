import {observer} from 'mobx-react-lite';
import Link from 'next/link';

import styles from '../../styles/Toolbar.module.css';

const Toolbar = () => {

	return (
		<nav className={styles.toolbarNav}>
			<Link href={'/'} passHref>
				<button className={[styles.eventButton, styles.dashboard].join(' ')}>
					Home
				</button>
			</Link>
			<Link href={'/createEvent'} passHref>
				<button className={[styles.eventButton, styles.createEvent].join(' ')}>
					Create Event
				</button>
			</Link>
			<Link href={'/eventDashboard'} passHref>
				<button className={[styles.eventButton, styles.viewAll].join(' ')}>
					View All
				</button>
			</Link>
		</nav>
	);
};

export default observer(Toolbar);