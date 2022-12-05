import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
	Item,
	selectItems,
	selectItemsQuantity,
	removeItem,
	selectTotal,
	descreaseQuantity,
	increaseQuantity,
	selectIsDisplayed,
} from './cartSlice';
import './Cart.css';
import { addNotification } from '../notifications/notificationsSlice';

export function Cart() {
	const quantity: number = useAppSelector(selectItemsQuantity);
	// pobieranie ilości

	const items: Item[] = useAppSelector(selectItems);

	// ad. zad. 3.2 -
	const total: number = useAppSelector(selectTotal);

	// ad. zad. 3.x

	const isDisplayed: boolean = useAppSelector(selectIsDisplayed);
	// add zad. 2.4: (dodajemy dispatcher)
	const dispatch = useAppDispatch();

	// zadanie domowe
	const handleRemoveClick = (id: string) => {
		dispatch(removeItem(id));
		dispatch(
			addNotification({
				message: `Produkt został usunięty z koszyka.`,
				type: 'info',
			})
		);
	};

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
		return (
			<button className="btn btn-light" onClick={() => handleRemoveClick(id)}>
				x
			</button>
		);
	};

	return (
		<div
			id="cart"
			className={
				'card position-absolute top-0 end-0 z-index-1 w-25 ' +
				(isDisplayed ? 'd-block' : 'd-none')
			}>
			<ul className="list-group list-group-flush">
				{items.map((item, index) => (
					<li
						className="list-group-item d-flex justify-content-between align-items-center"
						key={index}>
						{item.name} {item.price}
						<span>
							<button
								className="btn btn-light"
								onClick={() => dispatch(descreaseQuantity(item.id))}>
								-
							</button>
							({item.quantity})
							<button
								className="btn btn-light"
								onClick={() => dispatch(increaseQuantity(item.id))}>
								+
							</button>
							{renderRemoveButton(item.id)}
						</span>
					</li>
				))}
			</ul>

			{/* ad. 3.2 */}
			<div className="card-footer d-flex justify-space-between">
				<span>Total:</span> <strong>{total} PLN </strong>
			</div>
		</div>
	);
}
