import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <Link className="link" to="/" exact >Back to Home</Link>
                <Link className="link" to=" " exact >Another Link</Link>
            </ul>
        </div>
    )
}