import React from "react";
import {NavLink} from "react-router-dom";

export default function TabNavigator() {
    return (
        <div className="tab-navigator">
            <NavLink to="/home">home</NavLink>
            <NavLink to="/user">user</NavLink>
        </div>
    )
}
