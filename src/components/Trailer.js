import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {Navigate, useNavigate, useParams} from 'react-router-dom';
import {movies} from './Rate';


function Trailer() {
    const navigate = useNavigate();

    const {id} = useParams();
    const movie = movies.find((movie) => movie.id === Number(id));
    const [loading, setLoading] = useState(false)

    return (
        <div>{
            loading ? <Navigate to="/"/> : <div>
                <iframe width="560" height="315"
                    src={
                        movie.video
                    }
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                <Button variant="primary"
                    onClick={
                        () => navigate(-1)
                }>
                    go back
                </Button>
            </div>
        } </div>
    )
}

export default Trailer
