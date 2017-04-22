'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(){
        super()
    }
    render(){
        return (
            <div>
                <h1>Chavruta</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <App />, document.getElementById('app')
)

export default App