import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo1.jpg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                    <Link to="/">
                        <img src={logo} alt="store" className="navbar-brand" />
                    </Link>
                    <ul className="nav-bar align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                                products
                            </Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2">
                                <i className="fas fa-cart-plus">My Cart</i>
                            </span>
                        </ButtonContainer>
                    </Link>
                </NavWrapper>
            </div>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;b
        font-size: 1.3rem;
        text-transform: capitalize;
        list-style-type: none;
    }
    .navbar-brand {
        width: 5rem;
        border-radius: 60px;
    }
`;
