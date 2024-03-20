import {FC} from 'react';

import {IMovie} from "../../../interfaces";
import {urls} from "../../../constants";

interface IProps {
    movieDetails: IMovie
}

const MovieDetails: FC<IProps> = ({movieDetails}) => {

    const {title,backdrop_path} = movieDetails;

    return (
        <div>
            <h4>{title}</h4>
            <img src={urls.image+backdrop_path} alt={title}/>
        </div>
    );
};

export {MovieDetails};