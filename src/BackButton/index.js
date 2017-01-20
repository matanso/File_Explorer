/**
 * Created by matan on 20/01/17.
 */

import React from 'react';
import './BackButton.css';
import icon from './back.svg';

class BackButton extends React.Component {
    render() {
        return (
            <div className="BackButton">
                <img src={icon} className="icon" onDoubleClick={this.props.onClick} alt="back"/>
            </div>
        );
    }
}

export default BackButton;