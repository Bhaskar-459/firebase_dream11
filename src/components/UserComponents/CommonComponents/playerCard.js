import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PlayerCard = (props) => {
    return (
        <div>
            <div className="card" style={{ width: '18rem',margin:'1rem' }}>
                <img src={props.image} className="card-img-top" alt={props.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.ipl}</p>
                    <p className="card-text">{props.country}</p>
                    <button className="btn btn-success">Add</button>
                </div>
            </div>
        </div>
    );
}

export default PlayerCard;
