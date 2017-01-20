/**
 * Created by matan on 20/01/17.
 */

import React from 'react';
import './FileList.css';
import File from '../File/index';
import Directory from '../Directory/index';

function compare(file1, file2) {
    if (file1.type !== file2.type) return file1.type === 'folder' ? -1 : 1;
    return file1.name < file2.name ? -1 : 1;
}


class FileList extends React.Component {
    render() {
        if (!Array.isArray(this.props.files)) return (<div></div>);
        this.props.files.sort(compare);
        return (
            <div className="FileList">
                {this.props.files.map(create, this)}
            </div>
        );


        function create(file, index) {
            switch (file.type) {
                case 'folder':
                    return <Directory key={index} name={file.name} onClick={() => this.props.onClick(index)}/>;
                case 'file':
                    return <File key={index} name={file.name}/>;
                default:
                    throw new Error(`Unknown object type ${file.type}`);
            }
        }
    }
}

export default FileList;