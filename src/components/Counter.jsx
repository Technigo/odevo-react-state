import { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(0)
  // let count = 0 //Vanilla JS - don't use in React

  const handleIncrease = () => {
    // count ++ //Vanilla JS - don't use in React
    // setCount(previousCount => previousCount + 1) // For more complex operations
    setCount(count + 1)
    // console.log("Increase button clicked, count is now: ", count)
  }

  const handleDecrease = () => {
    setCount(count - 1)
    // console.log("Decrease button clicked")
  }

  const handleDouble = () => {
    setCount(count * 2)
    // console.log("Double button clicked")
  }

  const handleReset = () => {
    setCount(0)
    // console.log("Reset button clicked")
  }

  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleDouble}>Double</button>
      <button onClick={handleReset}>Reset</button>
      <p>Count: {count}</p>
      <p>{count > 5 ? `You're above 5` : `You're at 5 or below`}</p>
    </div>
  )
}
