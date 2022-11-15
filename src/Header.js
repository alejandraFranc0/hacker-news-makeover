import React from "react";
import { NavLink, useMatches } from "react-router-dom";
import ToggleTheme from "./features/theme/theme";

export default function Header() {
    const activeStyle = {
        color: 'coral',
    };

    const matches = useMatches();
    return (
        <div className='header-nav container-fluid'>
            <div>
                <NavLink to='/'>
                    <i className="fa-brands fa-3x fa-hacker-news" ></i>
                </NavLink>
            </div>
            <div>
                <span> Hacker News </span>
            </div>
            <div className='spacer'>
                <div>
                <NavLink 
                    style={({ isActive }) =>
                    matches.length === 1 || isActive ? activeStyle : undefined
                    }
                    to='latest' end>Latest</NavLink>
                </div>| 
                <div>
                <NavLink
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    to='starred'>Starred</NavLink>

                </div>
           </div>
            <ToggleTheme/>
        </div>
    )
}