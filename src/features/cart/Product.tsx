import { useAppDispatch } from "../../app/hooks";
import { addItem } from "./cartSlice";
import './Product.css';

export interface ProductPros {
	name: string;
	price: number;
	id: string;
}

export function Product(product: ProductPros) {
	const dispatch = useAppDispatch();

	return (
        <div className="product">
            <h3>{product.name}</h3>
            <span>{ product.price}</span>
			<button
				onClick={() => {
					dispatch(addItem(product));
				}}>
				Add product
			</button>
		</div>
	);
}
