import { useCallback, useState } from 'react';

function useLocalStorage(key, initialValue) {
	console.log('[UseLocalStorage.js]: Invoke');

	const [storedValue, setStoredValue] = useState(() => {
		console.log('[UseLocalStorage.js]: UseStateDefaultValue Func Invoke');
		const item = window.localStorage.getItem(key);
		console.log(item);
		return item ? JSON.parse(item) : initialValue;
	});

	const setValue = useCallback(
		value => {
			console.log('[UseLocalStorage.js]: setValue()');
			setStoredValue(value);
			window.localStorage.setItem(key, JSON.stringify(value));
		},
		[key]
	);

	const removeValue = useCallback(() => {
		window.localStorage.removeItem(key);
	}, [key]);

	return { storedValue, setValue, removeValue };
}

export default useLocalStorage;
