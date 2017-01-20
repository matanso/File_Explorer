/**
 * Created by matan on 20/01/17.
 */

import React from 'react';
import './SearchBar.css';
import {Typeahead} from 'react-typeahead';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="SearchBar">
                <div className="container">
                    <span className="icon">&#128269;</span>
                    <Typeahead
                    options={getAllFiles(this.props.data)}
                    maxVisible={4}
                    filterOption={(input, option) => option.toLowerCase().startsWith(input.toLowerCase())}
                    customClasses={{input: 'searchInput', listItem: 'option', listAnchor: 'link', results: 'list'}}
                    onOptionSelected={file => this.search(file)}
                />
                </div>
            </div>
        );

        function getAllFiles(node) {
            let files = [node.name];
            for(let n of (node.children || [])) files = files.concat(getAllFiles(n));
            return files;
        }
    }

    search(file) {
        let root = {children: [this.props.data], name: '/', type: 'folder'};

        let path = find(file, root);
        this.props.update(path[path.length - 1],
            path.slice(0, path.length - 1));

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

export default SearchBar;