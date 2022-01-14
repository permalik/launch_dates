import {observer} from 'mobx-react-lite';
import {useStore} from '../../stores/store';

import styles from '../../styles/Toolbar.module.css';

const Toolbar = () => {
	const {eventStore} = useStore();

	return (
		<nav className={styles.toolbarNav}>
			<button className={styles.createButton}
							onClick={() => eventStore.openForm()}>
				Create
			</button>
		</nav>
	);
};

export default observer(Toolbar);