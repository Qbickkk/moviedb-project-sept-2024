import React, {useContext, useEffect} from 'react';

import {Context} from "../../../hoc";
import {MoviePoster} from "../MoviePoster/MoviePoster";
import {movieService} from "../../../services";
import {Pagination} from "../../Pagination/Pagination";
import css from './Movies.module.css'

const Movies = () => {

    const {movies, setMovies, page, setPage, changeTrigger} = useContext(Context);

    useEffect(() => {
        movieService.getAll(page).then(({data}) => {
            setMovies(data.results)
            setPage(data.page)
        })
        changeTrigger()
    }, [page, setPage, setMovies]);

    return (
        <div>
            <div className={css.Movies}>
                {movies.map(movie => <MoviePoster key={movie.id} movie={movie}/>)}
            </div>
                <Pagination/>
        </div>
    );
};

export {Movies};