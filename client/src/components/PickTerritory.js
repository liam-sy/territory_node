import React, { Component } from 'react';
import ListAdrs from './GetAddresses.js';
import RefreshTerrs from './RefreshTerrList.js';

class Form extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            terr: '',
            up: 0
        }

    }

    handleTerrChange = event => {
        this.setState({
            terr: event.target.value
        })
    }
    
    handleSubmit = event => {

        this.setState({
            up: this.state.terr
        })
        
        event.preventDefault()

        console.log(this.state)

    };

    render() {
        const { terr } = this.state

        return (
            <div>
                <RefreshTerrs/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label form="usr">ID:</label>
                        <input type="number" className="form-control" id="usr" value={terr} onChange={this.handleTerrChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
                <ListAdrs propTerr={terr} propUp={this.state.up}/>
            </div>
        )
    }
};

export default Form;