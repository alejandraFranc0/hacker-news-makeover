import React from "react";
import { NavLink, useMatches } from "react-router-dom";
import ToggleTheme from "./features/theme/theme";

export default function Header() {
    const activeStyle = {
        color: 'coral',
    };
    const inactiveStyle = {
        'fontSize': 'small',
    }

    const matches = useMatches();
    return (
        <div className='header-nav'>
            <div>
                <NavLink to='/'>
                    <i className="fa-brands fa-3x fa-hacker-news" ></i>
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
                        to='latest' end>latest</NavLink>
                </span>  |
                <span>
                    <NavLink
                        style={({ isActive }) =>
                            isActive ? activeStyle : inactiveStyle
                        }
                        to='starred'>starred</NavLink>

                </span>
            </div>
            <ToggleTheme />
        </div>
    )
}