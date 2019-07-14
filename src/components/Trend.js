import React from 'react';
import Notice from './Notice';
import Analysis from './Analysis';
import {Consumer} from './Context';
const Trend = () => {
  return(
    <Consumer>
      {
        context=> {
          let cumulativeScore = 0;
          let cumulativePossibility =0;
          let array = [];
          
          array.push(context.gameData);
          if((context.relatedGames).length > 0) {
            (context.relatedGames).forEach(game => {
              array.push(game);
            })
          }
          array.sort(context.actions.sortFranchiseGamesArray);
          let scores = array.reduce((accumulator, game) => {
            if(game.aggregatedRating !== "Unknown") {
            accumulator.push(game.aggregatedRating)
            } 
            return accumulator
          }, []);
          console.log(scores);
         

          scores.forEach(item => {
            cumulativeScore += item;
            cumulativePossibility += 100;
          })

          console.log(cumulativeScore, cumulativePossibility);
          

          const chartStuff = array.map((game, index)=>{
            let barColorClass = '';
            let percentage = game.aggregatedRating / 100;

            if(percentage >= 0.90) {
              barColorClass=  "nes-progress is-success";
            } else if( percentage >= 0.70) {
              barColorClass = "nes-progress is-primary";
            } else if( percentage >= 0.50) {
              barColorClass = "nes-progress is-warning";
            } else if(percentage >= 0.30) {
              barColorClass = "nes-progress is-error"
            } else {
              barColorClass = "nes-progress"
            }
            return <div key={index} >
                    <h5>{game.name}</h5> 
                    <span>{game.releaseDate}</span>
                    <progress className={barColorClass} value={game.aggregatedRating} max="100"></progress>
                    <a className="nes-badge">
                      <span className="is-dark">RATING: {game.aggregatedRating}</span>
                    </a>
                  </div>
          })

          if(!context.gameData.name) {
            array = null
          }

          return ( 
            array !== null && array.length !== 0   ? 
              <div>
                <Analysis franchiseName={context.gameData.franchiseName} score={cumulativeScore} total={cumulativePossibility}/>
                {chartStuff}
              </div>
            :
              <div>
                <Notice type="noGraph"/>
              </div>
          )
        }
      }
    </Consumer>
  )
    
}

export default Trend;