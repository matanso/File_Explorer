import React from 'react';
import FileList from './FileList/index';
import Data from './data.json';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            current: [Data],
            parent: null
        };
    }

    render() {
        console.log(this.state);
        return (
            <div className="App">
                <FileList files={this.state.current} onClick={(i) => {
                    this.setState({
                        parent: this.state.current[i],
                        current : this.state.current[i].children});
                }}/>
            </div>
        );
    }
}

export default App;