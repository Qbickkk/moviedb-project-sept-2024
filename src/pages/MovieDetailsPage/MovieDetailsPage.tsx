import React, {useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {Context} from "../../hoc";
import {movieService} from "../../services";
import {MovieDetails} from "../../components";

const MovieDetailsPage = () => {

    const {id} = useParams();
    const {movieDetails,setMovieDetails} = useContext(Context);

    useEffect(() => {
        movieService.getById(+id).then(({data})=>setMovieDetails(data))
    }, [id]);

    return (
        <div>
            <MovieDetails movieDetails={movieDetails}/>
        </div>
    );
};

export {MovieDetailsPage};