import React from 'react'
import './App.css'
import { useFetch } from './useFetch'
import {useLocalStaorage} from './useLocalStaorage'
import {useWindowWidth} from './useWindowWidth'
import {UserKeypress} from './userKeypress'
import { useDebonce } from './useDebonce'


function App() {
  const [value, setValue] = useLocalStaorage('name', 'aaaaa')
  const windowWidth = useWindowWidth()
  const keypress = UserKeypress('a')
  const url = 'http://localhost:3000/trips'
  const data = useFetch(url)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }
  const debounce = useDebonce(onChange, 500)
  return (
    <>
      <p>Window width {windowWidth}</p>
      <p>Is 'a' key pressed ? {keypress ? 'Yes' : 'No'} </p>
      <ul>{data != null && data.map((item: any) => <li key={item.id}>{item.title}</li>)}
      </ul>
      <input type="search" name="" id="" onChange={debounce} />
    </>
  )
}

export default App
