  
const getResult = (a, b) => {
    return a + b
  }

export const FirstApp = ( { title, subTitle } ) => {
  
  /* console.log(props); */

  return (
    <>
      <h1>Hello I´am { title }</h1>
      <p>I´am Fragment { subTitle }</p>
    </>
  )
}
