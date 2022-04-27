import React from 'react';
import Notice from './Notice';



const MainGameData = (props) => {
    return ( props.gameData.name !== undefined ?  <div data-testid="mainGameDataDivEl">

                    <section id='mainGameDetails' className='nes-table-responsive'>
                        <h1 id="mainGameTitleH1" data-testid="mainGameDataH1El" className='nintendoFont'>
                            {props.gameData.name}
                        </h1>
                        <img alt="" id="mainGameImage" data-testid="mainGameImgEl" src={props.gameData.coverUrl} />
                        <table id="mainGameTable" className='nes-table is-bordered is-dark snesFont'>
                            <thead>
                                <tr id="mainGameTableHeadRow">
                                    <th>Rating</th>
                                    <th>Year</th>
                                    <th>Franchise</th> 
                                </tr>
                            </thead>
                            <tbody id="mainGameTableBody">
                                <tr>
                                    <td data-testid="mainGameDataRatingEL">{props.gameData.aggregatedRating}</td>
                                    <td data-testid="mainGameDataReleaseDateEL">{props.gameData.releaseDate}</td>
                                    <td data-testid="mainGameDataFranchiseEL">{props.gameData.franchiseName}</td>
                                </tr>
                            </tbody>
                        </table>
                        <section id="mainGameSummarySection" className="nes-container with-title is-centered">
                            <p data-testid="mainGameDataTitlePEL" className='title snesFont'>{props.gameData.name} Summary</p>
                            <p id="mainGameSummaryText" data-testid="mainGameDataSummaryPEL">
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