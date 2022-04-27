import React from 'react';
import {Consumer} from './Context';

const Loader = () => {
    return (
        <Consumer>
        {
            context => {
               
                return (
                    <dialog data-testid="loaderDialogEl" className="nes-dialog is-dark" id="loaderDialog">
                        <form method="dialog">
                        <p data-testid="loaderPEL" id="loaderP" className="title retroFont">LOADING</p>
                        <menu id="loaderMenuEl" className="dialog-menu">
                            <img alt="" data-testid="loaderImgEl" id="loaderImg" src={context.loaderImage} />
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
