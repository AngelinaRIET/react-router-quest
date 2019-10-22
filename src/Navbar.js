import React from 'react';

const Home = () => (
    <nav>
        <ul>
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/our-history" activeClassName="active">History</NavLink></li>
        </ul>
    </nav>);

export default Navbar;