import React from 'react';
import PlayerCard from '../CommonComponents/playerCard.js';
import { players } from '../../../Database/players.js';
import Playersetdata from '../../../Database/PlayerSet.js';

const Players = () => {
    Playersetdata();
    console.log(players);
    return (
        <div>
            <div className="row">
                {players.map((player, index) => {
                    return (
                        <div key={index} className="col-md-3 my-2">
                            <PlayerCard 
                                name={player.name} 
                                ipl={player.ipl} 
                                country={player.country} 
                                image={player.img} 

                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Players;
