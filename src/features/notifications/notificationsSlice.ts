import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type } from 'os';
import { RootState } from '../../app/store';

// opis typu który chcemy przechwowyać
export interface Notification {
	message: string;
	type: string;
	id: string;
}

// jak ma ten kawałęk tortu wyglądać:
export interface NotificationsState {
	// lista notyfikacji
	notifications: Notification[];
	isDisplayed: boolean;
}

const initialState: NotificationsState = {
	notifications: [{ id: '1', type: 'success', message: 'Pierwszy alert' }],
	isDisplayed: false,
};

// zdefiniować cały kawałek tortu o dopisać odpoweidnie rzeczy:
export const notificationsSlice = createSlice({
	name: 'notifications',
	initialState,
	reducers: {
		// dodanie
		addNotification: (
			state,
			action: PayloadAction<{ type: string; message: string }>
		) => {
			// tutaj implementacja
			// id musimy sobie sami stworzyć, wygenerować, jest na to kilka sposobów
			// możemy użyć date, timestamp (bo niemożliwe jest w tym samym czasie dwa powiadomienia)
			// można też skorzystać z biblioteki UID
			// najpierw data (sposób 1):
			const id = new Date().getTime().toString();
			const { type, message } = action.payload; //destrukturyzacja
			const notification: Notification = {
				id, //lub id: id - skrótowiec daliśmy!!! uwaga!!
				type,
				message, //: action.payload.message, action.payload.type
				// lub spread: ...action.payload, (wtedy const nie potrzebujemy)
				// uwaga! wszystkie sposoby rozpisane w repo prowadzącego w tym miejscu
			};
			// najpierw data (sposób 1):
			// sposób 2
			// sposób 2
			// sposób 3
			// sposób 3

			// zadanie domowe
			if (state.notifications.length === 3) {
				state.notifications.shift();
			}

			// dodanie na koniec tablicy pushem
			// state.items.push(notification);
			// inny sposób dodania na koniec tablicy:
			state.notifications = [...state.notifications, notification];
		},

		// usunięcie
		removeNotification: (state, action: PayloadAction<{ id: string }>) => {
			// tutaj implementacja
			const { id } = action.payload;
			state.notifications = state.notifications.filter((item) => item.id !== id);
		},
	},
});

// export
export const { addNotification, removeNotification } =
	notificationsSlice.actions;

// tworzymy selektory
// najpierw reducer
export const notificationsReducer = notificationsSlice.reducer;

// selektor
export const selectNotifications = (state: RootState) =>
	state.notifications.notifications;

// nowy selektor zadanie domowe
export const selectLast3Notifications = (state: RootState) => {
	// używamy sloce() do wybrania trzech ostatnich elementów tablicy
	return state.notifications.notifications.slice(-3);
};
