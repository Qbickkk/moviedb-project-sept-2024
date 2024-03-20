import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {Search} from "../SearchContainer/Search";
const Header = () => {

    return (
        <div className={css.Header}>
            <div>
                <NavLink to={'movies'}>TheMovieDB</NavLink>
            </div>
            <div className={css.Links}>
                <NavLink to={'movies'}>Movies</NavLink>
                <NavLink to={'genres'}>Genres</NavLink>
            </div>
            <div>
                <Search/>
            </div>
            <div>
            </div>
        </div>
    );
};

export {Header};


