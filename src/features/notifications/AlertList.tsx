import { useAppSelector } from '../../app/hooks';
import { Alert } from './Alert';
import {
	selectLast3Notifications,
	selectNotifications,
} from './notificationsSlice';

export function AlertList() {
	// const alerts = [
	// 	{ message: 'Pierwszy Alert', type: 'success' },
	// 	{ message: 'Drugi Alert', type: 'info' },
	// 	{ message: 'Trzeci Alert', type: 'warning' },
	// 	{ message: 'Czwarty Alert', type: 'error' },
	// ];
	// zamiana na nowo utworzoną tablicę selectNotifications
	const alerts = useAppSelector(selectLast3Notifications);

	// zad. 4.2
	// wyświetl listę komponentów Alert ze zmiennej alerts
	return (
		// <div>
		// 	{alerts.map((message, type) => (
		// 		<Alert message={message} type={alerts.type} />
		// 	))}
		// </div>
		<div>
			{alerts.map((alert) => (
				<Alert key={alert.id} id={alert.id} type={alert.type} message={alert.message} />
			))}
		</div>
	);
}
