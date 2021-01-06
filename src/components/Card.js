import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
    const user = 'John'
    return (
        <div className="card">
            <img src={''} alt={''} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">User John</h5>
                <Link to={'/profile/' + user} className="btn btn-primary">Open</Link>
            </div>
        </div>
    );
};

export default Card;