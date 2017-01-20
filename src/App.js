import React from 'react';
import FileList from './FileList/index';
import BackButton from './BackButton/index';
import SearchBar from './SearchBar/index'
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
                {this.renderPathBar()}
                <SearchBar data={Data} search={file => this.search(file)}/>
                {this.renderBackButton()}
                <FileList files={this.state.current.children} onClick={(i) => {
                    this.state.parents.push(this.state.current);
                    this.setState({
                        current: this.state.current.children[i],
                    });
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

    search(file) {
        if(Data.name === file) {
            this.setState({
                current: {children: [Data], name: '/', type: 'folder'},
                parents: [],
            });
            return;
        }


        let path = find(file, Data);
        this.setState({
            parents: path.slice(0, path.length - 1),
            current: path[path.length - 1]
        });

        function find(file, node) {
            if(!node.children) return null;
            for(let n of node.children) {
                if(n.name === file) {
                    return n.type === 'file' ?
                        [node] :
                        [node, n];
                }
                let res = find(file, n);
                if(Array.isArray(res)) {
                    res.unshift(node);
                    return res;
                }
            }
            return null;
        }
    }
}

export default App;