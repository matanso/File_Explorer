/**
 * Created by matan on 20/01/17.
 */

import React from 'react';
import './create.css';

class NameDialog extends React.Component {
    constructor() {
        super();
        this.state = {name: ''};
    }
    render() {
        return (
            <div className="NameDialog">
                <div id="myModal" className="modal">

                    <div className="modal-content">
                        <span className="close" onClick={this.props.close}>&times;</span>
                        <p className="request">Please enter name for the new file/folder:</p>
                        <form>
                        <input type="text" value={this.state.name} onChange={e => this.handleChange(e)}/>
                        <input type="submit" value="Create" onClick={() => this.props.create(this.state.name)}/>
                        </form>
                    </div>

                </div>
            </div>
        );

    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }
}

export default NameDialog;