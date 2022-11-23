import React from "react";
import { NavLink, useMatches } from "react-router-dom";
import HackerSVG from '../images/Hacker.svg'
import ToggleTheme from "../features/theme/theme";

export default function Header() {
    const activeStyle = {
        color: '#fb651e',
    };
    const inactiveStyle = {
        fontSize: 'small',
    }

    const matches = useMatches();
    return (
        <nav className='header-nav'>
            <div>
                <NavLink to='/'>
                    <img src={HackerSVG} alt="Feather-Icon" className='hacker-news'/>
                </NavLink>
            </div>
            <div>
                <h1> Hacker News </h1>
            </div>
            <div className='header-space'>
                <span>
                    <NavLink
                        style={({ isActive }) =>
                            matches.length === 1 || isActive ? activeStyle : inactiveStyle
                        }
                        to='latest' reloadDocument={true}>latest</NavLink>
                </span>  |
                <span>
                    <NavLink
                        style={({ isActive }) =>
                            isActive ? activeStyle : inactiveStyle
                        }
                        to='starred' reloadDocument={true}>starred</NavLink>

                </span>
            </div>
            <ToggleTheme />
        </nav>
    )
}