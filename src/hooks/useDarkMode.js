import {useLocalStorage} from './useLocalStorage';

export function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage('darkmodeOn', false);
    return [darkMode, setDarkMode];
}