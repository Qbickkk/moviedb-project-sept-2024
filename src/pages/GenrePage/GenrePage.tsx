import React, {useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {genreService} from "../../services";
import {Context} from "../../hoc";
import {MoviePoster, Pagination} from "../../components";

const GenrePage = () => {

    const {genreId} = useParams();
    const {setMovies,movies,page} = useContext(Context);

    useEffect(() => {
        genreService.getByGenreId(+genreId, page).then(({data})=> setMovies(data.results))
    }, [genreId, page,setMovies]);

    return (
        <div>
            {movies.map(movie=><MoviePoster key={movie.id} movie={movie}/>)}
            <Pagination/>
        </div>
    );
};

export {GenrePage};