import React from "react";
import SearchBar from "./SearchBar";
import style from './Nav.module.css';
import { NavLink } from 'react-router-dom';

export default function Nav({onSearch}){
    return(
        <nav className={style.nav}>
            <NavLink to='/' className={style.button} activeClassName={style.active} exact> <span>Inicio</span> </NavLink>
            <SearchBar onSearch={onSearch}/>
            <NavLink to='/about' className={style.button} activeClassName={style.active}> <span>About</span> </NavLink>
        </nav>
    )
}