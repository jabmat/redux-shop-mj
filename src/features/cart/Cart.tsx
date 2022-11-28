import { useAppSelector } from "../../app/hooks";
import { selectItemsQuantity } from "./cartSlice";

export function Cart() {
	const quantity = useAppSelector(selectItemsQuantity);
	// pobieranie ilości
	return (
		<div id="cart" className="cart">
			{quantity}
		</div>
	);
}
