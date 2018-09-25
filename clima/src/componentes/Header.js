import React from 'react';

const Header = (props) => {
    return (
        <div>
            <header>
                <nav className="new-warpper light-blue darken-2">
                    <a className="brand-logo">{props.titulo}</a>
                </nav>
            </header>
        </div>
    );
};

export default Header;