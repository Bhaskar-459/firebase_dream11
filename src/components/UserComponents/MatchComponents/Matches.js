import React, { useState, useEffect } from 'react';
import MatchCard from './MatchCard.js'; // Assuming you have a MatchCard component

import { getdata  } from  './getdata.js';
import Schedule from "../../../Database/Schedule.js"

const Matches = () => {
  const [matches, setMatches] = useState([]); // Initialize matches as an empty array
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    // Simulate fetching data
    const fetchMatches = async () => {
      try {
        // Replace with your actual data fetching logic
        const data = await getdata();
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

  return (
    <div>
      {Schedule.length > 0 ? (
        Schedule.map(match => <MatchCard key={match.id} match={match} />)
      ) : (
        <div>No matches available</div> // Handle the case when there are no matches
      )}
    </div>
  );
};

export default Matches;
