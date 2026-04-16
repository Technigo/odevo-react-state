export const Counter = () => {
  let count = 0

  const handleIncrease = () => {
    count ++
    console.log("Increase button clicked, count is now: ", count)
  }

  const handleDecrease = () => {
    console.log("Decrease button clicked")
  }

  const handleDouble = () => {
    console.log("Double button clicked")
  }

  const handleReset = () => {
    console.log("Reset button clicked")
  }

  return (
    <div>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleDouble}>Double</button>
      <button onClick={handleReset}>Reset</button>
      <p>Count: {count}</p>
    </div>
  )
}
