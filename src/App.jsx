import { useState } from 'react'

import { Counter } from './components/Counter'
import { Pokemon } from './components/Pokemon'
import { Theme } from './components/Theme'

export const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false) //Lifted state so that we can make use of it in both App and Theme components

  return (
    <div className={`App ${isDarkTheme ? "dark" : "light"}`}>
      <h1>Hello World!</h1>
      <Counter />
      <Theme
        isDarkTheme={isDarkTheme}
        setIsDarkTheme={setIsDarkTheme}
      />
      {/* <Pokemon /> */}
    </div>
  )
}
