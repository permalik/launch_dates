import {
	action,
	makeAutoObservable,
	observable,
	runInAction
} from 'mobx';
import {Event} from '../models/event';
import agent from '../pages/api/agent';

export default class EventStore {
	events: Event[] = [];
	eventRegistry = new Map<string, Event>();
	selectedEvent: Event | undefined = undefined;
	editMode = false;
	loading = false;
	loadingInitial = true;

	constructor() {
		makeAutoObservable(this, {
			editMode: observable,
			events: observable,
			loadEvent: action.bound,
			loadEvents: action.bound,
			loadingInitial: observable,
			selectedEvent: observable,
			setLoadingInitial: action.bound
		});
	}

	get eventsByDate() {
		return Array.from(this.eventRegistry.values()).sort((a, b) =>
			Date.parse(a.date) - Date.parse(b.date));
	}

	async loadEvents() {
		this.loadingInitial = true;
		try {
			const events = await agent.Events.list();
			events.forEach((event: any) => {
				this.setEvent(event);
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

	async loadEvent(id: string) {
		let event = this.getEvent(id);
		if (event) {
			this.selectedEvent = event;
			return event;
		} else {
			this.loadingInitial = true;
			try {
				// @ts-ignore
				event = await agent.Events.details(id);
				// @ts-ignore
				this.setEvent(event);
				runInAction(() => {
					this.selectedEvent = event;
				});
				this.setLoadingInitial(false);
				return event;
			} catch (error) {
				console.log(error);
				this.setLoadingInitial(false);
			}
		}
	}

	private setEvent(event: Event) {
		event.date = event.date.split('T')[0];
		this.eventRegistry.set(event.id, event);
	}

	private getEvent(id: string) {
		return this.eventRegistry.get(id);
	}

	setLoadingInitial(state: boolean) {
		this.loadingInitial = state;
	}

	createEvent = async (event: Event) => {
		this.loading = true;
		try {
			// @ts-ignore
			await agent.Events.create(event);
			runInAction(() => {
				this.eventRegistry.set(event.id, event);
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
			// @ts-ignore
			await agent.Events.update(event);
			runInAction(() => {
				this.eventRegistry.set(event.id, event);
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
				this.eventRegistry.delete(id);
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