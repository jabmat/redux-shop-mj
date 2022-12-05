import { useAppDispatch } from '../../app/hooks';
import { removeNotification } from './notificationsSlice';

// 2. typujemy
export interface AlertProps {
	type: string;
	message: string;
	id: string;
}

// 1. tworzymy funkcję
// 3. uzupełniamy o typ (który wykorzystujemy)
// 4. upiększamy bootstrapem
// 5. wyświetlamy go np w SHop
export function Alert(props: AlertProps) {
	// zad. 4.1
	// treść - dodać instrukcję warunkową, mapowanie, połączyć z bootstrapem
	// w zleżności od podanego typu wyświetl odpowiedni rodzaj alertu
	// success - zielony alert
	// info - niebieski alert
	// warning - żółty alert
	// error - czerwony alert
	// jeżęli nie znajdzie typu - szary alert

	// zadanie
	const dispatch = useAppDispatch();

	// tworzymy funkcję
	const getClassType = (type: string): string => {
		switch (type) {
			case 'success':
				return 'alert-success';
			case 'info':
				return 'alert-info';
			case 'warning':
				return 'alert-warning';
			case 'error':
				return 'alert-danger';
			default:
				return 'alert-dark';
		}
	};

	const handleRemoveClick = (id: string) => {
		dispatch(removeNotification({ id }));
	};

	return (
		<div className={'alert alert-dismissible ' + getClassType(props.type)}><strong>{props.message}</strong><button type='button' className='btn-close' aria-label='Close' onClick={() => handleRemoveClick(props.id)}></button></div>
	);
}
