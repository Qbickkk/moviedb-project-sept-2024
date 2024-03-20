import React, {useContext, useEffect} from 'react';

import {Context} from "../../../hoc";
import {genreService} from "../../../services";
import {Genre} from "../Genre/Genre";
import css from './Genres.module.css'

const Genres = () => {

    const {genres, setGenres} = useContext(Context);

    useEffect(() => {
        genreService.getAll().then(({data}) => setGenres(data.genres));
    }, []);

    return (
        <div className={css.Container}>
            <div className={css.GenresContainer}>
                {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>
        </div>
    );
};

export {Genres};