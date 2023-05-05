import React from 'react';
import './ActiveLink.css'
import { Nav } from 'react-bootstrap';

const ActiveLink = ({to, children}) => {
    return (
        <Nav.Link
                    to={to}
                    className={({ isActive  }) => isActive ? "active" : "" }
                  >
                    {children}
                  </Nav.Link>
    );
};

export default ActiveLink;