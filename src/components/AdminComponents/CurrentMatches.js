import React from 'react'
import Schedule from '../../Database/Schedule'
import CurrentMatcheCard from './CurrentMatchCard'
import { useNavigate } from 'react-router-dom'
import dbfunc from '../../Database/MatchesGet'
import { useState, useEffect } from 'react'
const CurrentMatches = () => {
    const navigate = useNavigate();
    const AddMatch = () => {
        console.log('Add Match')
        navigate('/admin/setmatch')

    }

    const [matches, setMatches] = useState([]); // Initialize matches as an empty array
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    // Simulate fetching data
    const fetchMatches = async () => {
      try {
        // Replace with your actual data fetching logic
        const data = await dbfunc();
        setMatches(data);
      } catch (error) {
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchMatches();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while data is being fetched
  }
    const ScheduleList = matches.map((match) => {
        return (
            <div className='m-4' key={match.id}>
                <CurrentMatcheCard match={match} />
            </div>
        )
    }
    )
    return (
        <>
        <div className='d-flex flex-wrap'>
            {ScheduleList}
        </div>
        <button className='btn btn-primary m-4' onClick ={() =>{
            AddMatch()
        }}>
        Add Match</button>
        </>
    )
}

export default CurrentMatches