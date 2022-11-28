import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
	Item,
	selectItems,
	selectItemsQuantity, removeItem
} from './cartSlice';
import './Cart.css';

export function Cart() {
	const quantity: number = useAppSelector(selectItemsQuantity);
	// pobieranie ilości

	const items: Item[] = useAppSelector(selectItems);
	// add zad. 2.4: (dodajemy dispatcher)
	const dispatch = useAppDispatch();

	// powrót do JS
	// const names = ['Kamil', 'Jakub', 'Ania'];

	// const jakub = names[1];

	// names.map((item, index, array) => {
	//     // Kamil 0
	//     // Jakub 1
	//     // Ania 2
	// })

	// zad. 2.4
	// dodać możliwość usuwania elementu z koszyka (button) Products.tsx
	const renderRemoveButton = (id: string) => {
		return <button onClick={() => dispatch(removeItem(id))}>Remove</button>;
	};

	return (
		<div id="cart" className="cart">
			{quantity}

			<ul>
				{items.map((item, index) => (
					<li key={index}>
						{item.name} {item.price} ({item.quantity}) {renderRemoveButton(item.id)}{' '}
					</li>
				))}
			</ul>
		</div>
	);
}

