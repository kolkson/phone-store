import React, { Component } from 'react';
import logo from '../images/banner/logo.png';
import { Link } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';
import { FaAlignRight } from 'react-icons/fa';
import { FaShoppingBasket } from 'react-icons/fa';


export default class Navbar extends Component {

    state = {
        isOpen: false,
    }

    handleToggle = () => {
        const burger = document.querySelectorAll('.nav__burger');
        burger.forEach(burger => burger.classList.toggle('off'));
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {

        return (
            <>
                <nav className="nav">
                    <Link to="/basket">

                        <button className="nav__basket">
                            <FaShoppingBasket className="nav__basket-icon" />

                        </button>

                    </Link>
                    <button className="nav__button" onClick={this.handleToggle}>
                        <FaAlignJustify className="nav__burger" />
                        <FaAlignRight className="nav__burger off" />
                    </button>

                </nav>
                <div className={this.state.isOpen ? "menu menu--open" : "menu"}>
                    <ul className="menu__list">
                        <li className="menu__link" onClick={this.handleToggle}>
                            <Link to='/'>Strona główna</Link>
                        </li>
                        <li className="menu__link" onClick={this.handleToggle}>
                            <Link to='/phones'>Telefony</Link>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}
