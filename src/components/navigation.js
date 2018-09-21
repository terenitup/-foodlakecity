import React from 'react';
import { NavLink } from 'react-router-dom';

export default function() {
    return (
        <div className="navbarLinks">
            <div>
                <div>
                    <NavLink exact to="/" className="links">
                        HOME
                    </NavLink>
                </div>
            </div>

            <div>
                <div>
                    <NavLink to="/blog" className="links">
                        BLOG
                    </NavLink>
                </div>
            </div>

            <div>
                <div>
                    <NavLink to="/instagram" className="links">
                        INSTAGRAM
                    </NavLink>
                </div>
            </div>

            <div>
                <div>
                    <NavLink to="/contact" className="links">
                        CONTACT
                    </NavLink>
                </div>
            </div>
        </div>
    );
}