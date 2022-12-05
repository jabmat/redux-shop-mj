import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { searchProducts } from './productsSlice';

export function ProductsSearch() {
	// wprowadzamy obsługę stanu w react czy useState
	const [query, setQuery] = useState('');
	const dispatch = useAppDispatch();

	// funckja do obśługi submit wysyłki
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		// akcja po wysłaniu formularza
		dispatch(searchProducts({ query }));
	};

	return (
		<div>
			{/* ProductSearch */}
			<form className="d-flex" role="search" onSubmit={handleSubmit}>
				<input
					className="form-control me-2"
					// value={query}
					// onChange={(e) => setQuery(e.target.value)}
					// robimy tak, aby filtrowało reaktywnie:
					// nie musimy prevent default
					// nie musimy używać stanu (useState)
					onKeyDown={(e: any) =>
						dispatch(searchProducts({ query: e.target.value }))
					}
					type="search"
					placeholder="Search"
					aria-label="Search"
				/>
				{/* <button className="btn btn-outline-success" type="submit">
					Search
				</button> */}
			</form>
		</div>
	);
}
