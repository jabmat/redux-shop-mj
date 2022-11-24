// podejście klasowe lub funkcyjne

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addItem, Item, selectItemsQuantity } from "./cartSlice";

// funkcyjne:
export function Shop() {
    // obsługa, alias na Hook - dispatch
    const dispatch = useAppDispatch();

    // ile jest naszych itemów, informacja - wyciągnij ze stanu:
    const quantity = useAppSelector(selectItemsQuantity);

    const product: Item = {
        id: '1',
        name: 'Tomb Raider',
        price: 150
    }
    // zad. 1
    // treść

    // zad. 2
    // treść

    // Zad. 3 dla chętnych (dodatkowe selectory, itd.)
    // treść 

    // zad. 4. dodaj stylowanie i jakąś ikonkę koszyka
    // treść


    // tworzymy komponent
    return (
        <div>
            <div id='cart' className="cart">
                {quantity}
            </div>

            <div className="product">
                <button onClick={() => {dispatch(addItem(product))}}>Add product</button>
            </div>
        </div>
    )
}