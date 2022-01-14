import {
	action,
	makeAutoObservable,
	observable,
	runInAction
} from 'mobx';
import {Event} from '../models/event';
import agent from '../pages/api/agent';
import {v4 as uuid} from 'uuid';

export default class EventStore {
	events: Event[] = [];
	selectedEvent: Event | undefined = undefined;
	editMode = false;
	loading = false;
	loadingInitial = false;

	constructor() {
		makeAutoObservable(this, {
			editMode: observable,
			events: observable,
			loadEvents: action.bound,
			loadingInitial: observable,
			selectedEvent: observable,
			setLoadingInitial: action.bound
		});
	}

	async loadEvents() {
		runInAction(() => {
			this.setLoadingInitial(true);
		});

		try {
			const events = await agent.Events.list();
			events.forEach((event: any) => {
				event.date = event.date.split('T')[0];
				this.events.push(event);
			});
			runInAction(() => {
				this.setLoadingInitial(false);
			});
		} catch (error) {
			console.log(error);
			runInAction(() => {
				this.setLoadingInitial(false);
			});
		}
	}

	setLoadingInitial(state: boolean) {
		this.loadingInitial = state;
	}

	selectEvent = (id: string) => {
		this.selectedEvent = this.events.find(n => n.id === id);
	};

	cancelSelectedEvent = () => {
		this.selectedEvent = undefined;
	};

	openForm = (id?: string) => {
		id ? this.selectEvent(id) : this.cancelSelectedEvent();
		this.editMode = true;
	};

	closeForm = () => {
		this.editMode = false;
	};

	createEvent = async (event: Event) => {
		this.loading = true;
		event.id = uuid();
		try {
			await agent.Events.create(event);
			runInAction(() => {
				this.events.push(event);
				this.selectedEvent = event;
				this.editMode = false;
				this.loading = false;
			});
		} catch (error) {
			console.log(error);
			runInAction(() => {
				this.loading = false;
			});
		}
	};

	updateEvent = async (event: Event) => {
		this.loading = true;
		try {
			await agent.Events.update(event);
			runInAction(() => {
				this.events = [...this.events.filter(n => n.id !== event.id), event];
				this.selectedEvent = event;
				this.editMode = false;
				this.loading = false;
			});
		} catch (error) {
			console.log(error);
			runInAction(() => {
				this.loading = false;
			});
		}
	};

	deleteEvent = async (id: string) => {
		this.loading = true;
		try {
			await agent.Events.delete(id);
			runInAction(() => {
				this.events = [...this.events.filter(n => n.id !== id)];
				this.loading = false;
			});
		} catch (error) {
			console.log(error);
			runInAction(() => {
				this.loading = false;
			});
		}
	};

}