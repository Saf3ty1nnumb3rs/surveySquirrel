import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo" href="">
                        Survey Squirrel
                    </a>
                    <ul className="right">
                        <li>
                            <a href="">Login With Google</a>
                        </li>
                    </ul>
                </div>
               <h2>Header</h2> 
            </nav>
        );
    }
}

export default Header;