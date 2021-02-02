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
    const setValue = (value) => {
        //first set the state of stored value
        setStoredValue(value);
        //put the key:value in local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];
};