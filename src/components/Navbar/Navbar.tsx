import React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/Navbar.scss';

const Navbar = () => {
    return (
        <div>
            <header>
                <nav>
                    <input type="checkbox" name="" id="check" />
                    <label htmlFor="check" className="checkbtn"><i className="fas fa-bars"></i></label>
                    <label className="logo" htmlFor="check">Markopolo</label>
                    <ul>
                        <li>
                            <Link className="active" to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/add-new">Add New Post</Link>
                        </li>
                        <li>
                            <Link to="/delete">Delete Post</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;