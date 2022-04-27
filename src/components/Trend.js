import React from 'react';
import Notice from './Notice';
import Analysis from './Analysis';
import {Consumer} from './Context';
const Trend = (props) => {
  return(
    <Consumer>
      {
        context=> {
          let cumulativeScore = 0;
          let cumulativePossibility =0;
          let array = [];

          const arrayManager = (context, props) => {
              array.push(props.gameData);
            if((props.relatedGames).length > 0) {
              (props.relatedGames).forEach(game => {
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
          

            scores.forEach(item => {
              cumulativeScore += item;
              cumulativePossibility += 100;
            })

            return array

          }
          
         

          const chartStuffGenerator = (array) => {

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
                    <h5 data-testid={'trend/gameName-'+index}>{game.name}</h5> 
                    <span data-testid={'trend/releaseDate-'+index}>{game.releaseDate}</span>
                    <progress data-testid={'trend/progress-'+index} className={barColorClass} value={game.aggregatedRating} max="100"></progress>
                    {/* eslint-disable-next-line */}
                    <a href="" data-testid={'trend/badge-'+index} className="nes-badge">
                      <span data-testid={'trend/badgeSpan-'+index} className="is-dark">RATING: {game.aggregatedRating}</span>
                    </a>
                  </div>
          })
           return chartStuff;
          }

          

          if(!props.gameData.name) {
            array = null
          } else {

          arrayManager(context, props);
          }

          return ( 
            array !== null && array.length !== 0   ? 
              <div data-testid="trendDivEl">
                <Analysis franchiseName={props.gameData.franchiseName} score={cumulativeScore} total={cumulativePossibility}/>
                {chartStuffGenerator(array)}
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

Trend.defaultProps = {
  gameData: {},
  relatedGames: []
}

export default Trend;