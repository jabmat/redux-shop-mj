import { useAppDispatch } from "../../app/hooks";
import { addItem } from "./cartSlice";

export interface ProductPros {
	name: string;
	price: number;
	id: string;
}

export function Product(product: ProductPros) {
	const dispatch = useAppDispatch();

	return (
		<div className="product">
			<button
				onClick={() => {
					dispatch(addItem(product));
				}}>
				Add product
			</button>
		</div>
	);
}
