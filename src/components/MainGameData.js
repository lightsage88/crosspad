import React, {Component} from 'react';
import {Consumer} from './Context';



const MainGameData = () => {
    return (
        <Consumer>
        {
            context => {
     
            return (
                <div>
                    <h1 className='nintendoFont'>
                        {context.gameData.name || "Wait for something cool"}
                    </h1>
                    <img src={context.gameData.coverUrl} />
                    <section id='mainGameDetails' className='nes-table-responsive'>
                        <table className='nes-table is-bordered is-dark snesFont'>
                            <thead>
                                <tr>
                                    <th>Rating</th>
                                    <th>Year</th>
                                    <th>Franchise</th> 
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{context.gameData.aggregatedRating}</td>
                                    <td>{context.gameData.releaseDate}</td>
                                    <td>{context.gameData.franchiseName}</td>
                                </tr>
                            </tbody>
                        </table>
                        <section className="nes-container with-title is-centered">
                            <p className='title snesFont'>ABOUT {context.gameData.name}</p>
                            <p>
                            {context.gameData.summary}
                            </p>
                        </section>
                    </section>
                </div>
            )

            }
        }
        </Consumer>
    )
    
}

export default MainGameData;