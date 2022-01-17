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

	function handleSubmit(e: any) {
		e.preventDefault();
		event.id ? updateEvent(event) : createEvent(event);
	}

	function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const {name, value} = e.target;
		setEvent({...event, [name]: value});
	}

	return (
		<form autoComplete={'off'} className={styles.eventForm}
					onSubmit={handleSubmit}>
			<h2 className={styles.formHeading}>Configure Event</h2>
			<div className={styles.wrapper}>
				<input
					className={[styles.formInput, styles.titleInput].join(' ')}
					name={'title'}
					onChange={handleInputChange}
					placeholder={'Title'}
					value={event.title}
				/>
				<input
					className={[styles.formInput, styles.categoryInput].join(' ')}
					name={'category'}
					onChange={handleInputChange}
					placeholder={'Category'}
					value={event.category}
				/>
				<textarea
					className={[styles.formTextArea, styles.descriptionTextArea].join(' ')}
					name={'description'}
					onChange={handleInputChange}
					placeholder={'Description'}
					value={event.description}
				/>
				<input
					className={[styles.formInput, styles.venueInput].join(' ')}
					name={'venue'}
					onChange={handleInputChange}
					placeholder={'Venue'}
					value={event.venue}
				/>
				<input
					className={[styles.formInput, styles.cityInput].join(' ')}
					name={'city'}
					onChange={handleInputChange}
					placeholder={'City'}
					value={event.city}
				/>
				<input
					className={[styles.formInput, styles.stateInput].join(' ')}
					name={'state'}
					onChange={handleInputChange}
					placeholder={'State'}
					value={event.state}
				/>
				<input
					className={[styles.formInput, styles.dateInput].join(' ')}
					name={'date'}
					onChange={handleInputChange}
					placeholder={'Date'}
					value={event.date}
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
		</form>
	);
};

export default observer(EventForm);