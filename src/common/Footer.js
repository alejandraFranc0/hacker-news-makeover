import React from "react";
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer">
            <h3>Hacker News</h3>
            <h6>
                <Link to='latest'>latest</Link> | <Link to='starred'>starred</Link>
            </h6>

        </footer>
    )
};