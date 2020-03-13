import {useEffect} from 'react';
import useLocalStorage from './UseLocalStorage';

const useDarkMode = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue)
    useEffect(() => {
            if(value === true){
                return document.querySelector('body').classList.add('dark-mode')
            }else {
                return document.querySelector('body').classList.remove('dark-mode')
            }
        },[value])
        return [value, setValue]
}
export default useDarkMode