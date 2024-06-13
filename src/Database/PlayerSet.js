import { db, ref, child, get, set } from "../firebaseconfig.js";

const Playersetdata = async () => {
    let match_id = 3;
    try {
        await set(ref(db, `${match_id}/Players`), {
            id: 1,
            name: 'Virat Kohli',
            role: 'Batsman',
            team: 'India',
            price: 1000000
        });
        console.log('Data for player 1 is set');

        await set(ref(db, '1/Players/2'), {
            id: 2,
            name: 'Rohit Sharma',
            role: 'Batsman',
            team: 'India',
            price: 900000
        });
        console.log('Data for player 2 is set');
    } catch (error) {
        console.error('Error setting data:', error);
    }
};

export default Playersetdata;