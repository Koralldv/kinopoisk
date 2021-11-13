import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SINGLE_FILM } from '../api/kinopios';
export const Film = () => {
    const { filmId } = useParams();
    const navigate = useNavigate();
    console.log(useNavigate());
    const [film, setFilm] = useState({});
    useEffect(() => {
        fetch(SINGLE_FILM(filmId), {
            method: 'GET',
            headers: {
                'X-API-KEY': 'f876a4a1-43e5-45e4-bbab-4efbf24a5835',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((json) => setFilm(json));
    }, []);

    return (
        <div>
            {(console.log(film), film.nameRu)}
            <button onClick={() => navigate(-1)}>back</button>
        </div>
    );
};
