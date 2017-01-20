/**
 * Created by matan on 20/01/17.
 */


import React from 'react';
import './Directory.css';
//noinspection JSUnresolvedVariable
import icon from './dir.svg';

class Directory extends React.Component {
    render() {
        return (
            <div className="Directory">
                <a href="#" onDoubleClick={() => console.log('clicked')}>
                    <img src={icon} className="icon"/> {this.props.name}
                </a>
            </div>
        );
    }
}

export default Directory;