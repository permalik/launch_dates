import Styles from '../../styles/PrimarySection.module.css';

const PrimarySection = ({children}: any) => {
	return (
		<section className={Styles.primarySection}>
			{children}
		</section>
	);
};

export default PrimarySection;