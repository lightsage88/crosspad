import React from 'react';
import {Consumer} from './Context';

const Loader = () => {
    return (
        <Consumer>
        {
            context => {
                return (
                    <dialog className="nes-dialog is-dark" id="loaderDialog">
                        <form method="dialog">
                        <p id="loaderP" className="title retroFont">LOADING</p>
                        <menu id="loaderMenuEl" className="dialog-menu">
                            <img id="loaderImg" src={context.loaderImage} />
                        </menu>
                        </form>
                    </dialog>
                )
            }
        }
        </Consumer>

    )
}


export default Loader;
