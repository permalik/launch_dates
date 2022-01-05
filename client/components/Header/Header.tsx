import Link from 'next/link';

import styles from '../../styles/Header.module.css';

interface Props {
	openForm: () => void;
}

const Header = ({openForm}: Props) => {
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<section>
					<Link href={'/'}>
						<a className={styles.logo}>
							R.L.D
						</a>
					</Link>
					<button className={styles.addButton} onClick={openForm}>
						Add Event
					</button>
				</section>
				<nav className={styles.nav}>
					<Link href={'/'}>
						<a className={styles.navLink}>
							about
						</a>
					</Link>
					<Link href={'/'}>
						<a className={styles.navLink}>
							connect
						</a>
					</Link>
					<Link href={'/'}>
						<a className={styles.navLink}>
							events
						</a>
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;