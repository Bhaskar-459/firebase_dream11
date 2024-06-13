// Code to get data from database
import dbfunc from '../../../Database/MatchesGet.js';
let MatchData = [];

let getdata = async () => {
    MatchData = await dbfunc();
    return MatchData;
}

export { getdata };