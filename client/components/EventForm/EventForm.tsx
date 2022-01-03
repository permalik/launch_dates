import styles from '../../styles/EventForm.module.css';

const EventForm = () => {
	return (
		<form className={styles.eventForm}>
			<h2 className={styles.formHeading}>Edit Event</h2>
			<div className={styles.wrapper}>
				<input className={[styles.formInput, styles.titleInput].join(' ')} placeholder={'Title'}/>
				<input className={[styles.formInput, styles.categoryInput].join(' ')} placeholder={'Category'}/>
				<textarea className={[styles.formTextArea, styles.descriptionTextArea].join(' ')} placeholder={'Description'}/>
				<input className={[styles.formInput, styles.venueInput].join(' ')} placeholder={'Venue'}/>
				<input className={[styles.formInput, styles.cityInput].join(' ')} placeholder={'City'}/>
				<input className={[styles.formInput, styles.stateInput].join(' ')} placeholder={'State'}/>
				<input className={[styles.formInput, styles.dateInput].join(' ')} placeholder={'Date'}/>
			</div>
		</form>
	);
};

export default EventForm;