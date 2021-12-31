import Styles from '../../styles/Layout.module.css';

const Layout = ({children}: any) => {
	return (
		<main className={Styles.main}>
			{children}
		</main>
	);
};

export default Layout;