import { db, ref, child, get, set } from "../firebaseconfig.js";

const setdata = async ({match}) => {
    console.log('Setting data for match', match);
    try {
        await set(ref(db, `matches/${match.id}`), {
            id: match.id,
            team1: match.team1,
            team2: match.team2,
            date: match.date,
            venue: match.venue,
        });
        console.log('Data for match 1 is set');

        
    } catch (error) {
        console.error('Error setting data:', error);
    }
};

export default setdata;