import React, {Component} from 'react';
import Notice from './Notice';



const MainGameData = (props) => {
    return ( props.gameData.name !== undefined ?  <div>

                    <section id='mainGameDetails' className='nes-table-responsive'>
                        <h1 className='nintendoFont'>
                            {props.gameData.name}
                        </h1>
                        <img src={props.gameData.coverUrl} />
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
                                    <td>{props.gameData.aggregatedRating}</td>
                                    <td>{props.gameData.releaseDate}</td>
                                    <td>{props.gameData.franchiseName}</td>
                                </tr>
                            </tbody>
                        </table>
                        <section className="nes-container with-title is-centered">
                            <p className='title snesFont'>ABOUT {props.gameData.name}</p>
                            <p>
                            {props.gameData.summary}
                            </p>
                        </section>
                    </section>
                </div>
                :
                (<Notice type='noGame' />)         
    )
    
}

MainGameData.defaultProps = {
    gameData: {}
}

export default MainGameData;