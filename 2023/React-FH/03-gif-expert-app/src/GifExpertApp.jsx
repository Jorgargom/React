import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch' ,'Dragon Ball']);
  
  const onAddCategory = () => {
    setCategories( [...categories, 'Valorant'] );
  };


  return (
    <>
    {/* Title */}
    <h1>GifExpertApp g016SpOBjprAYcRbT5vkWMPo8uyeJ1RK</h1>
    
    {/* Input */}
    <AddCategory />

    {/* Listado de Gif */}
      <button onClick={ onAddCategory }>ADD</button>
      <ol>
        { categories.map( category => {
          return <li key={ category }>{ category }</li>
        }) }
      </ol>
      {/* Gif Item */}

    
    </>
  )
}
