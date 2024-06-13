import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadOptions from './LoadOption';

const UpdatePoints = () => {
  const { id } = useParams();
  const [team, setTeam] = useState('');

  const handleChange = (event) => {
    setTeam(event.target.value);
  };

  return (
    <div className='col-md-6'>
      <h3>Update Points for Players for Match with ID: {id}</h3>
      <select
        className="form-select"
        aria-label="Default select example"
        id='team'
        value={team}
        onChange={handleChange}
      >
        <option value="">Select the team</option>
        <option value="India">India</option>
        <option value="Australia">Australia</option>
      </select>
      {team && <LoadOptions team={team} />}
    </div>
  );
};

export default UpdatePoints;
