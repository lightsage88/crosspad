import React from 'react';
import {Consumer} from './Context';

const Notice = (props) => {
    return(
        <Consumer>
         {
             context => {
                 let notice;
                 if(props.type === 'search'){
                     let number = Math.floor(Math.random()*context.searchNoticeImages.length);
                     notice = <img src={context.searchNoticeImages[number]}/>
                 } else if (props.type === 'noGraph') {
                     let number = Math.floor(Math.random()*context.noGraphSet.length);
                    notice = <section className="message-list">
                                <section className="message -right">
                                    <div className="nes-balloon from-right">
                                    <p>{context.noGraphSet[number].text}</p>
                                    </div>
                                    <img src={context.noGraphSet[number].image}/>
                                    
                                </section>
                             
                             </section>
                 } else if(props.type === 'noGame'){
                     let number = Math.floor(Math.random()*context.noGameSet.length);
                     notice = <section className="message-list">
                                <section className="message -right">
                                    <div className="nes-balloon from-right">
                                    <p>{context.noGameSet[number].text}</p>
                                    </div>
                                    <img src={context.noGameSet[number].image}/>
                                    
                                </section>
                             
                             </section>
                 }
                return (
                    <div className={context.first} data-testid="noticeDivEl" id="noticeDiv">
                        {notice}
                    </div>
                )
             }
         }   
        </Consumer>
    )
    
}


export default Notice;