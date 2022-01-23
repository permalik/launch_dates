import {createContext, useContext} from 'react';

import CommonStore from './commonStore';
import EventStore from './eventStore';

interface Store {
	commonStore: CommonStore;
	eventStore: EventStore;
}

export const store: Store = {
	commonStore: new CommonStore(),
	eventStore: new EventStore()
};

export const StoreContext = createContext(store);

export function useStore() {
	return useContext(StoreContext);
}