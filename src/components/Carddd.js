import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import {  deleteMovie} from '../redux/actions/MoviesAction';
import { Link, useParams } from 'react-router-dom';

function Carddd({movie}) {
    const dispatch= useDispatch();
    // const params=useParams();

    return (<div>


        <Card style={
            {width: '18rem'}
        }>
            <Card.Img variant="top" src={movie.posterUrl}/>
            <Card.Body>
                <Card.Title> {
                    movie.title
                }</Card.Title>
                <Card.Text>
                    {movie.description}
                </Card.Text>
                <Button variant="primary" onClick={()=>dispatch(deleteMovie(movie.title))} >delete</Button>
                <Link  to = {`/trailer/${movie.id}`}>
                <Button variant="primary"  > go to trailer </Button>
                </Link>
            </Card.Body>
        </Card>
    </div>)
}

export default Carddd
