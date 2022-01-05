import styles from '../../styles/EventForm.module.css';

interface Props {
	event: Event | undefined;
	closeForm: () => void;
}

const EventForm = ({closeForm, event}: Props) => {
	return (
		<form className={styles.eventForm}>
			<h2 className={styles.formHeading}>Configure Event</h2>
			<div className={styles.wrapper}>
				<input className={[styles.formInput, styles.titleInput].join(' ')}
							 placeholder={'Title'}/>
				<input className={[styles.formInput, styles.categoryInput].join(' ')}
							 placeholder={'Category'}/>
				<textarea
					className={[styles.formTextArea, styles.descriptionTextArea].join(' ')}
					placeholder={'Description'}/>
				<input className={[styles.formInput, styles.venueInput].join(' ')}
							 placeholder={'Venue'}/>
				<input className={[styles.formInput, styles.cityInput].join(' ')}
							 placeholder={'City'}/>
				<input className={[styles.formInput, styles.stateInput].join(' ')}
							 placeholder={'State'}/>
				<input className={[styles.formInput, styles.dateInput].join(' ')}
							 placeholder={'Date'}/>
				<section className={styles.formControls}>
					<button className={styles.submitButton} type={'submit'}>submit
					</button>
					<button className={styles.cancelButton} type={'button'}>cancel
					</button>
				</section>
			</div>
		</form>
	);
};

export default EventForm;