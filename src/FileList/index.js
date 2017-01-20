/**
 * Created by matan on 20/01/17.
 */

import React from 'react';
import File from '../File/index';
import Directory from '../Directory/index';

function compare(file1, file2) {
    if(file1.type !== file2.type) return file1.type === 'folder' ? -1 : 1;
    return file1.name < file2.name ? -1: 1;
}


class FileList extends React.Component {
    render() {
        if(!Array.isArray(this.props.files)) return(<div></div>);
        let clickHandler = this.props.onClick;
        this.props.files.sort(compare);
        return (
            <div>
                {this.props.files.map(create)}
            </div>
        );


        function create(file, index) {
            console.log(index);
            switch (file.type) {
                case 'folder':
                    return <Directory name={file.name} onClick={() => clickHandler(index)}/>;
                case 'file':
                    return <File name={file.name}/>;
            }
            throw new Error(`Unknown object type ${file.type}`);
        }
    }
}

export default FileList;