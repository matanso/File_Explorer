import React from 'react';
import Directory from './Directory/index';
import File from './File/index';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Directory name="files"/>
                <File name="img.jpg"/>
                <File name="data.txt"/>
            </div>
        );
    }
}

export default App;