import React from 'react';
import { useNavigate } from 'react-router-dom';

const CurrentMatchCard = ({ match }) => {
  const navigate = useNavigate();

  const GotoSetForm = (id) => {
    console.log(id);
    navigate(`/admin/setmatchpoints/${id}`);
  };

  return (
    <div>
      <div className="card mb-3 d-flex flex-nowrap" style={{ maxWidth: '500px' }}>
        <div className="row">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{match.team1} vs {match.team2}</h5>
              <p className="card-text">Venue:- {match.venue}</p>
              <p className="card-text">Date:-{match.date}</p>
              <button
                className="btn btn-primary"
                onClick={() => GotoSetForm(match.id)}
              >
                Set Points
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentMatchCard;
