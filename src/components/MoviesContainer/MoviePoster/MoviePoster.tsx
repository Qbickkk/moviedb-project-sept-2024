import {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../../interfaces";
import {urls} from "../../../constants";
import css from './MoviePoster.module.css'
interface IProps {
    movie: IMovie
}

const MoviePoster: FC<IProps> = ({movie}) => {

    const navigate = useNavigate();

    const {title,release_date, poster_path,id} = movie;

    return (
        <div className={css.Poster} onClick={()=>navigate(`/movie/${id}`)}>
            <img src={urls.image+poster_path} alt={title}/>
            <h3>{title}</h3>
            <h4>{release_date}</h4>
        </div>
    );
};

export {MoviePoster};