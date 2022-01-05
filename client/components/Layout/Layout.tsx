import Header from '../Header';

import Styles from '../../styles/Layout.module.css';

interface Props {
	openForm: () => void;
}

const Layout = ({children}: any, {openForm}: Props) => {
	return (
		<>
			<Header openForm={openForm}/>
			<main className={Styles.main}>
				{children}
			</main>
		</>
	);
};

export default Layout;