import React from 'react';
import {Consumer} from './Context';

const Notice = (props) => {
    return(
        <Consumer>
         {
             context => {
                 let image;
                 console.log(props)
                 if(props.type === 'search'){
                     let number = Math.floor(Math.random()*11);
                     console.log(number);
                     image = context.searchNoticeImages[number];
                    
                     
                 }
                 console.log(image);
                return (
                    <div>
                        <img src={image}/>
                    </div>
                )
             }
         }   
        </Consumer>
    )
    
}


export default Notice;