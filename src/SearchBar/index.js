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
                    maxVisible={2}
                    filterOption={(input, option) => option.toLowerCase().startsWith(input.toLowerCase())}
                    customClasses={{input: 'searchInput', listItem: 'option', listAnchor: 'link', results: 'list'}}
                    onOptionSelected={this.props.search}
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
}

export default SearchBar;