import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Artículos</Link></li>
                <li><Link to="/subida">Subida</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
