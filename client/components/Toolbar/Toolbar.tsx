import styles from '../../styles/Toolbar.module.css';

interface Props {
	openForm: () => void;
}

const Toolbar = ({openForm}: Props) => {
	return (
		<nav className={styles.toolbarNav}>
			<button className={styles.createButton} onClick={openForm}>
				Create
			</button>
		</nav>
	);
};

export default Toolbar;