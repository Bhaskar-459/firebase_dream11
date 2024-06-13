import { db, ref, child, get } from "../firebaseconfig.js";

// Function to fetch data from the Firebase database
const dbfunc = async () => {
    let MatchData = [];
    const dbRef = ref(db);
    try {
        const dbSnap = await get(child(dbRef, 'matches'));
        if (dbSnap.exists()) {
            console.log('Data available:', dbSnap.val());
            MatchData =  await dbSnap.val();
            return MatchData;
        } else {
            console.log('No data available');
            return MatchData;
        }
    } catch (error) {
        console.error('Error getting data:', error);
    }
};

export default dbfunc;
