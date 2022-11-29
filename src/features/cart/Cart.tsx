import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
	Item,
	selectItems,
	selectItemsQuantity,
	removeItem,
	selectTotal,
	descreaseQuantity,
	increaseQuantity,
} from './cartSlice';
import './Cart.css';

export function Cart() {
	const quantity: number = useAppSelector(selectItemsQuantity);
	// pobieranie ilości

	const items: Item[] = useAppSelector(selectItems);

	// ad. zad. 3.2 -
	const total: number = useAppSelector(selectTotal);
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
						{item.name} {item.price}
						<button onClick={() => dispatch(descreaseQuantity(item.id))}>
							-
						</button>
						({item.quantity})
						<button onClick={() => dispatch(increaseQuantity(item.id))}>
							+
						</button>
						{renderRemoveButton(item.id)}
					</li>
				))}
			</ul>

			{/* ad. 3.2 */}
			<div>Total: {total}</div>
		</div>
	);
}
