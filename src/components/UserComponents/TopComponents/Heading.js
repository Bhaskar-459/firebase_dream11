import React from 'react'
import publicUrl from '../../../poster.png';
const Heading = () => {
    return (
        <div>
           <div style={{ backgroundImage: `url(${publicUrl})`, backgroundSize: '100% 200%' ,backgroundRepeat: 'no-repeat', width:'100vw' }} className="text-white">
                <div className="container py-5 text-end">
                    <h1 className="display-4 font-weight-bold">Enjoy Match</h1>
                    <p className="font-italic mb-0">Make the best use of Resources</p>
                    <p className="font-italic">Make your team and win the match</p>
                    <a href="#" role="button" className="btn btn-primary px-5">login</a>
                    
                </div>
            </div>
        </div>
    )
}

export default Heading