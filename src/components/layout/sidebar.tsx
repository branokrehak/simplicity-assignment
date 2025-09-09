import React from 'react';
import { LuMegaphone } from 'react-icons/lu';

import '../../styles/components/layout/sidebar.scss';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return <>
        <aside className="sidebar">
            <NavLink to="/" className="logo">
                <img src="logo.png" alt="" />
                <h3>Test city</h3>
            </NavLink>

            <ul>
                <li>
                    <NavLink to="/announcements" className={({ isActive }) => `link ${isActive ? 'link--active' : ''}`}>
                        <LuMegaphone size={22} /> Announcements
                    </NavLink>
                </li>
            </ul>
        </aside>
    </>;
}
