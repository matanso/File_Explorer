/**
 * Created by matan on 20/01/17.
 */

import React from 'react';
import '../File.css';
import fileIcon from './file.svg';
import picIcon from './picture.svg';
import delIcon from '../delete.svg';

const icon = {png: picIcon, jpg: picIcon, bmp: picIcon, txt: fileIcon};

class File extends React.Component {
    render() {
        let ext = 'txt';
        if(this.props.name) {
            let parts = this.props.name.split('.');
            ext = parts[parts.length - 1];
        }
        return (
            <div className="File">
                <a href="#">
                    <img src={icon[ext] || fileIcon} className="icon" alt="file"/> {this.props.name}
                </a> <a href="#" onClick={this.props.delete}><img src={delIcon} className="delIcon" alt="delete"/> </a>
            </div>
        );
    }
}

export default File;