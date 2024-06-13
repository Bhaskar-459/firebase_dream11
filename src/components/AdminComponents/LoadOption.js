import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { players } from '../../Database/players.js'; // Adjust the path to your actual file

const LoadOption = ({ team }) => {
  const [teamPlayers, setTeamPlayers] = useState([]);
  const [scores, setScores] = useState({
    'Rohit Sharma': { runs: 0, wickets: 0, catches: 0 },
    'Virat Kohli': { runs: 0, wickets: 0, catches: 0 },
    'Rishabh Pant': { runs: 0, wickets: 0, catches: 0 },
    'Jasprit Bumrah': { runs: 0, wickets: 0, catches: 0 },
    'Ravindra Jadeja': { runs: 0, wickets: 0, catches: 0 },
    'David Warner': { runs: 0, wickets: 0, catches: 0 },
    'Steve Smith': { runs: 0, wickets: 0, catches: 0 },
    'Alex Carey': { runs: 0, wickets: 0, catches: 0 },
    'Pat Cummins': { runs: 0, wickets: 0, catches: 0 },
    'Glenn Maxwell': { runs: 0, wickets: 0, catches: 0 },

  });
     

  useEffect(() => {
    // Set the players list based on the team
    const fetchPlayers = () => {
      const teamData = players[0][team.toLowerCase()];
      setTeamPlayers(teamData);
    };

    fetchPlayers();
  }, [team]);

  const handleScoreChange = (playerName, metric, event) => {
    const newScores = {
      ...scores,
      [playerName]: {
        ...scores[playerName],
        [metric]: event.target.value,
      },
    };
    setScores(newScores);
  };

  const handleSubmit = () => {
    // Log the scores for all players
    teamPlayers.forEach((player) => {
      console.log(player.name);
      console.log(scores[player.name]);
    });
    console.log('Scores submitted');
    console.log(scores);
  };

  return (
    <div>
      <h4>Load Options for Team: {team}</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Runs</th>
            <th>Wickets</th>
            <th>Catches</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {teamPlayers.map((player) => (
            <tr key={player.name}>
              <td>{player.name}</td>
              <td>
                <input
                  type="number"
                  value={scores[player.name]?.runs || 0}
                  onChange={(e) => handleScoreChange(player.name, 'runs', e)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={scores[player.name]?.wickets || 0}
                  onChange={(e) => handleScoreChange(player.name, 'wickets', e)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={scores[player.name]?.catches || 0}
                  onChange={(e) => handleScoreChange(player.name, 'catches', e)}
                  className="form-control"
                />
              </td>
              {/* Add more fields as needed */}
            </tr>
          ))}
        </tbody>
      </Table>
      <button className="btn btn-primary" onClick={handleSubmit}>Submit Scores</button>
    </div>
  );
};

export default LoadOption;

