import React from 'react';
import {Consumer} from './Context';

const Notice = (props) => {
    return(
        <Consumer>
         {
             context => {

                 const generateNotice = (context, props) => {
                    if(context) {
                     let notice, number;
                     switch(props.type) {
                        case 'search':
                        number = Math.floor(Math.random()*context.searchNoticeImages.length);
                        notice = <img data-testid={'noticeImg-search'} value={number} src={context.searchNoticeImages[number]} />
                        break;

                        case 'noGraph':
                        number = Math.floor(Math.random()*context.noGraphSet.length);
                        notice =<section data-testid={'noticeSection-noGraph'} className="message-list">
                                    <section className="message -right">
                                        <div className="nes-balloon from-right">
                                            <p>{context.noGraphSet[number].text}</p>
                                        </div>
                                        <img src={context.noGraphSet[number].image}/>
                                    </section>
                                </section>
                        break;

                        case 'noGame':
                        number = Math.floor(Math.random()*context.noGameSet.length);
                        notice =<section data-testid="noticeSection-noGame" className="message-list">
                                    <section className="message -right">
                                        <div className="nes-balloon from-right">
                                         <p>{context.noGameSet[number].text}</p>
                                        </div>
                                    <img src={context.noGameSet[number].image}/>
                                </section>                            
                             </section>
                     
                    }
                    return notice 
                    }
                 }
                 
                return (
                    <div data-testid="noticeDivEl" id="noticeDiv">
                        {generateNotice(context, props)}
                    </div>
                )
             }
         }   
        </Consumer>
    )
    
}

Notice.defaultProps = {
    context : {
        searchNoticeImages: [],
        noGameSet: []
    }
}



export default Notice;