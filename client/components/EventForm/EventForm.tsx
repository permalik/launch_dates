import {Field, Form, Formik} from 'formik';
import {observer} from 'mobx-react-lite';
import Link from 'next/link';
import {ChangeEvent, useState} from 'react';
import {useStore} from '../../stores/store';

import styles from '../../styles/EventForm.module.css';

const EventForm = () => {
	const {eventStore} = useStore();
	const {
		createEvent,
		loading,
		selectedEvent,
		updateEvent
	} = eventStore;

	const initialState = selectedEvent ?? {
		id: '',
		title: '',
		category: '',
		description: '',
		venue: '',
		city: '',
		state: '',
		date: ''
	};

	const [event, setEvent] = useState(initialState);

	// function handleSubmit(e: any) {
	// 	e.preventDefault();
	// 	event.id ? updateEvent(event) : createEvent(event);
	// }
	//
	// function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
	// 	const {name, value} = e.target;
	// 	setEvent({...event, [name]: value});
	// }

	return (
		<Formik enableReinitialize initialValues={event}
						onSubmit={values => console.log(values)}>
			{({handleSubmit}) => (
				<Form autoComplete={'off'} className={styles.eventForm}
							onSubmit={handleSubmit}>
					<h2 className={styles.formHeading}>Configure Event</h2>
					<div className={styles.wrapper}>
						<Field
							className={[styles.formInput, styles.titleInput].join(' ')}
							name={'title'}
							placeholder={'Title'}
						/>
						<Field
							className={[styles.formInput, styles.categoryInput].join(' ')}
							name={'category'}
							placeholder={'Category'}
						/>
						<Field
							className={[styles.formTextArea, styles.descriptionTextArea].join(' ')}
							name={'description'}
							placeholder={'Description'}
						/>
						<Field
							className={[styles.formInput, styles.venueInput].join(' ')}
							name={'venue'}
							placeholder={'Venue'}
						/>
						<Field
							className={[styles.formInput, styles.cityInput].join(' ')}
							name={'city'}
							placeholder={'City'}
						/>
						<Field
							className={[styles.formInput, styles.stateInput].join(' ')}
							name={'state'}
							placeholder={'State'}
						/>
						<Field
							className={[styles.formInput, styles.dateInput].join(' ')}
							name={'date'}
							placeholder={'Date'}
							type={'date'}
						/>
						<section className={styles.formControls}>
							<button className={styles.submitButton} type={'submit'}>
								{loading ? 'Loading...' : 'submit'}
							</button>
							<Link href={'/eventDashboard'} passHref>
								<button className={styles.cancelButton}
												type={'button'}>cancel
								</button>
							</Link>
						</section>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default observer(EventForm);