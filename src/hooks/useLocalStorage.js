import React, {useState} from 'react';

export function useLocalStorage(key, initialValue) {
    //set state for a value
    const [storedValue, setStoredValue] = useState(() => {
        //item set to whatever value is stored under the key in local storage
        const item = window.localStorage.getItem(key);
        //if item is truthy, we parse it
        //if not, we set the initial value as storedValue state
        return item ? JSON.parse(item) : initialValue;
    });
}