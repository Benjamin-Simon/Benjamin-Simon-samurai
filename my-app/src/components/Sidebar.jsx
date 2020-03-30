import React from 'react';

const Sidebar = () => {
    return (
        <nav className="navigation">
            <ul>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/some">Some</a></li>
            </ul>
        </nav>
    );
};

export default Sidebar;