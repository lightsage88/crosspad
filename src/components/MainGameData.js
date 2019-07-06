import React, {Component} from 'react';


class MainGameData extends Component {
    state ={
        name: this.props.name
    }
    render() {

    console.log(this.props);
    return (
        <div>
            <h1 className='nintendoFont'>{this.state.name}</h1>
        </div>
    )
    }
}

export default MainGameData;