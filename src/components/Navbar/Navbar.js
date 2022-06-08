import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <header>
                <nav>
                    <input type="checkbox" name="" id="check" />
                    <label for="check" class="checkbtn"><i class="fas fa-bars"></i></label>
                    <label class="logo" for="check">Markopolo</label>
                    <ul>
                    {/* <li><a className="active" href="/">Home</a></li> */}
                    <li>
                        <Link className="active" to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/add-new">Add New Post</Link>
                    </li>
                    <li>
                        <Link to="/update">Update Post</Link>
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