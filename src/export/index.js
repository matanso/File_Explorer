/**
 * Created by matan on 20/01/17.
 */

import React from 'react';
import './export.css';
import icon from './export.svg';

class exportJson extends React.Component {
    render() {
        return (
            <div className="export">
                <a href="#" onClick={() => this.download()}>
                    <img src={icon} className="icon"/> export to json
                </a>
            </div>
        );
    }

    download() {
        var blob = new Blob([ JSON.stringify(this.props.data) ], { type: 'json' });
        var a = document.createElement('a');
        a.download = 'export.json';
        a.href = window.URL.createObjectURL(blob);
        a.click();
        if (a.remove) a.remove();
    }
}

export default exportJson;