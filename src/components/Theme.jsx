// import { useState } from "react"

export const Theme = (props) => {
  // const [isDarkTheme, setIsDarkTheme] = useState(false)

  const handleThemeChange = () => {

    props.setIsDarkTheme(!props.isDarkTheme)
        console.log("Button clicked", props.isDarkTheme)
    // if (isDarkTheme === true) {
    //   setIsDarkTheme(false)
    // }
  }

  return (
    <section className={props.isDarkTheme ? "dark" : "light"}>
      <button onClick={handleThemeChange}>Toggle theme</button>
      <p>{props.isDarkTheme ? "Dark theme" : "Light theme"}</p>
    </section>
  )
}