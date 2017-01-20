import React from 'react';
import BackButton from './BackButton/index';
import SearchBar from './SearchBar/index';
import FileList from './FileList/index';
import Export from './export/index';
import Create from './create/index';
import Data from './data.json';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            current: {children: [Data], name: '/', type: 'folder'},
            parents: [],
        };
    }

    render() {
        return (
            <div className="App">
                <Export data={Data}/>
                {this.state.current.name !== '/' && <Create create={file => {
                    this.state.current.children.push(file);
                    this.forceUpdate();
                }}/>
                }
                <br/>
                {this.renderPathBar()}
                <SearchBar data={Data} update={(current, parents) => this.setState({current, parents})}/>
                {this.renderBackButton()}
                <FileList files={this.state.current.children} onClick={i => {
                    this.state.parents.push(this.state.current);
                    this.setState({
                        current: this.state.current.children[i],
                    });
                }} delete={i => {
                    this.state.current.children.splice(i, 1);
                    this.forceUpdate();
                }}/>
            </div>
        );
    }

    renderBackButton() {
        return this.state.parents.length ? <BackButton onClick={() => {
            this.setState({
                current: this.state.parents.pop(),
            })
        }}/> : '';
    }

    renderPathBar() {
        let path = this.state.parents.map(n => n.name).concat([this.state.current.name]);
        return <div className="pathBar">{path.map(create, this)}</div>;

        function create(name, index) {
            return name && <button className="pathButton" key={index} onClick={() => {
                    this.setState({
                        parents: this.state.parents.slice(0, index),
                        current: this.state.parents[index] || this.state.current
                    });
                }}>{name}</button>;
        }
    }
}

export default App;