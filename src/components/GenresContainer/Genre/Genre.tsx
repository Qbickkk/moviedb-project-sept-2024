import {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../../interfaces";

interface IProps {
    genre:IGenre
}

const Genre: FC<IProps> = ({genre}) => {

    const navigate = useNavigate();
    const {id,name} = genre;

    return (
        <div>
            <button onClick={()=>navigate(`/genre/${id}`)}>{name}</button>
        </div>
    );
};

export {Genre};