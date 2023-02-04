  
const getResult = (a, b) => {
    return a + b
  }

export const FirstApp = () => {
  
  return (
    <>
      <h1>Hello I´am { getResult(10, 5) }</h1>
      <p>I´am Fragment</p>
    </>
  )
}
