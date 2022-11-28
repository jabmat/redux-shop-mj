import { useAppSelector } from '../../app/hooks';
import { Item, selectItems, selectItemsQuantity } from './cartSlice';
import './Cart.css';

export function Cart() {
	const quantity: number = useAppSelector(selectItemsQuantity);
	// pobieranie ilości

    const items: Item[] = useAppSelector(selectItems);
	
    // powrót do JS
    // const names = ['Kamil', 'Jakub', 'Ania'];

    // const jakub = names[1];

    // names.map((item, index, array) => {
    //     // Kamil 0
    //     // Jakub 1
    //     // Ania 2
    // })
    
    
    
    return (
		<div id="cart" className="cart">
            {quantity}
            
            <ul>
                {items.map((item, index) => <li key={index}>{item.name} {item.price}</li>)}
            </ul>

		</div>
	);
}
