import {createContext, FC, PropsWithChildren, useState} from 'react';

import {IMovie,IGenre} from "../interfaces";
import {ISetState} from "../types";

interface IProps extends PropsWithChildren {

}

const Context = createContext<{
    movies: IMovie[]
    setMovies: ISetState<IMovie[]>
    movieDetails: IMovie
    setMovieDetails: ISetState<IMovie>
    genres: IGenre[]
    setGenres: ISetState<IGenre[]>
    page: number
    setPage: ISetState<number>
    trigger: boolean
    changeTrigger: () => void
}>(null);

const ContextProvider: FC<IProps> = ({children}) => {

    const [movies, setMovies] = useState<IMovie[]>([]);
    const [movieDetails, setMovieDetails] = useState<IMovie>({} as IMovie);
    const [genres, setGenres] = useState<IGenre[]>([]);
    const [page, setPage] = useState<number>(1);
    const [trigger, setTrigger] = useState<boolean>(null);

    const changeTrigger = () => {
        setTrigger(prev => !prev)
    }

    return (
        <Context.Provider
            value={{movies, setMovies, movieDetails, setMovieDetails, genres, setGenres, setPage, page, changeTrigger,trigger}}>
    {children}
    </Context.Provider>
);
};

export {ContextProvider, Context};