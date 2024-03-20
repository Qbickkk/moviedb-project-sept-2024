import React, {useContext} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {Context} from "../../hoc";

const Search = () => {

    const {changeTrigger, setMovies,setPage,page} = useContext(Context);
    const {register,handleSubmit,reset} = useForm<IMovie>();
    const navigate = useNavigate();

    const search:SubmitHandler<IMovie> = async(query) => {
        await movieService.search(query.title, page).then(({data})=> {
            setMovies(data.results);
            setPage(data.page);
        })
        changeTrigger();
        navigate(`/search/${query.title}`);
        reset()
    };

    return (
        <form onSubmit={handleSubmit(search)}>
            <input type='text' placeholder={'search'} {...register('title')} />
            <button>find</button>
        </form>
    );
};

export {Search};