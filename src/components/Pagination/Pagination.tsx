import React, {useContext, useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";

import {Context} from "../../hoc";
import {movieService, genreService} from "../../services";
import css from './Pagination.module.css'

const Pagination = () => {


    const {setMovies} = useContext(Context);
    const {genreId, querySearch} = useParams();
    const [query, setQuery] = useSearchParams({page: '1'});
    const pageNum = query.get('page');


    useEffect(() => {
        if (genreId) {
            genreService.getByGenreId(+genreId, +pageNum).then(({data}) => setMovies(data.results))
        } else if (querySearch) {
            movieService.search(querySearch, +pageNum).then(({data}) => setMovies(data.results))
        } else {
            movieService.getAll(+pageNum).then(({data}) => setMovies(data.results))
        }
    }, [pageNum, genreId, setMovies, querySearch]);

    const prevHandler = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') - 1}`);
            return prev
        })
    };

    const nextHandler = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') + 1}`);
            return prev
        })
    };


    return (
        <div className={css.Pagination}>
            <button className={css.Button} disabled={+pageNum <= 1} onClick={prevHandler}>prev</button>
            <button className={css.Button} disabled={+pageNum >= 500} onClick={nextHandler}>next</button>
        </div>
    );
};

export {Pagination};