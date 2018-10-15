import React from 'react';


const Header = (props) => {
    return ( 
        <header>
            <h1 className="text-center">{props.titulo}</h1> 
        </header>
     );
}
 
export default Header;