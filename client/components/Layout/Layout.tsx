import Header from '../Header';

import Styles from '../../styles/Layout.module.css';

const Layout = ({children}: any) => {
	return (
		<>
			<Header/>
			<main className={Styles.main}>
				{children}
			</main>
		</>
	);
};

export default Layout;