import React from 'react'
import { useState } from 'react'
import setdata from "../../Database/MatchesSet.js"
import { useNavigate } from 'react-router-dom'
let matchId = 1
const SetMatchForm = () => {
  const navigate = useNavigate();
  const [team1, setTeam1] = useState('')
  const [team2, setTeam2] = useState('')
  const [venue, setVenue] = useState('')
  const [date, setDate] = useState('')

  const handleTeam1Change = (e) => {
    setTeam1(e.target.value)
  }
  const handleTeam2Change = (e) => {
    setTeam2(e.target.value)
  }
  const handleVenueChange = (e) => {
    setVenue(e.target.value)
  }
  const handleDateChange = (e) => {
    setDate(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
    let match = {
      team1: team1,
      team2: team2,
      venue: venue,
      date: date,
      id: matchId
    }
    console.log(match)
    matchId++;
    setdata({match})
    navigate('/admin/matches')
  }

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="team1" className="form-label">Team 1</label>
          <input type="text" className="form-control" id="team1" value={team1} onChange={handleTeam1Change}/>
        </div>
        <div className="mb-3">
          <label htmlFor="team2" className="form-label">Team 2</label>
          <input type="text" className="form-control" id="team2" value={team2} onChange={handleTeam2Change} />
        </div>
        <div className="mb-3">
          <label htmlFor="venue" className="form-label">Venue</label>
          <input type="text" className="form-control" id="venue" value={venue} onChange={handleVenueChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input type="date" className="form-control" id="date" value={date} onChange={handleDateChange} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default SetMatchForm