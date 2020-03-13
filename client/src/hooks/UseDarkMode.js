import {useEffect} from 'react'
import {useLocalStorage} from './UseLocalStorage'

export const useDarkMode = (key) => {
  const [value, setValue] = useLocalStorage(key)
    useEffect(() => {
            if(value === true){
                return document.querySelector('body').classList.add('dark-mode')
            }else {
                return document.querySelector('body').classList.remove('dark-mode')
            }
        },[value])
        return [value, setValue]
}