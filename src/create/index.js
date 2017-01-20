/**
 * Created by matan on 20/01/17.
 */

import React from 'react';
import icon from './plus.svg'
import './create.css';
import folderIcon from '../Directory/dir.svg';
import fileIcon from '../File/file.svg';
import NameDialog from './NameDialog';

class create extends React.Component {
    constructor() {
        super();
        this.state = {enabled: false, modal: false};
    }

    render() {
        if (!this.state.enabled)
            return (
                <div className="create">
                    <img src={icon} alt="create" className="icon"
                         onClick={() => this.setState({enabled: !this.state.enabled})}/>
                </div>
            );

        return (
            <div className="create">
                <img src={icon} alt="create" className="icon"
                     onClick={() => this.setState({enabled: !this.state.enabled})}/>
                <div className="options">
                    <span className="createOption"><img src={folderIcon} alt="folder" className="opIcon"
                                                        onClick={() => this.setState({modal: 'folder'})}/></span>
                    <span className="createOption"><img src={fileIcon} alt="file" className="opIcon"
                                                        onClick={() => this.setState({modal: 'file'})}/> </span>
                    {this.state.modal &&
                    <NameDialog close={() => this.closeModal()} create={name => this.create(this.state.modal, name)}/>}
                </div>
            </div>
        );
    }

    closeModal() {
        this.setState({modal: false});
    }

    create(type, name) {
        console.log(name);
        let file = {name, type};
        if (type === 'folder') file.children = [];
        this.props.create(file);
        this.closeModal();
    }
}

export default create;