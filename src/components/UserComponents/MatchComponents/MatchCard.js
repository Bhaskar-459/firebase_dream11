import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MatchCard = ({ match }) => {
    const participate = (event, matchId) => {
        console.log("Participating in the match");
        console.log("Match ID:", matchId);
    };

    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="path/to/your/image.jpg" className="img-fluid rounded-start" alt="Match" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">World Cup Match</h5>
                        <p className="card-text">{match.team1} vs {match.team2}</p>
                        <Link to={`/matches/participate/${match.id}`} ><button 
                            className="btn btn-primary" 
                            onClick={(event) => participate(event, match.id)}
                        >
                            Participate
                        </button></Link>
                        <p className="card-text"><small className="text-body-secondary">Date: {match.date}</small></p>
                        <p className="card-text"><small className="text-body-secondary">Venue: {match.venue}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchCard;
