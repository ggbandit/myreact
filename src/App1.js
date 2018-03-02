import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Temp from './Components/Temp.js';

class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
        this.state = {surname: ''};
    }

    handleName = (event) => {
        let n = event.target.value;
        this.setState({name: n});
    };
    handleSurname = (event) => {
        let n = event.target.value;
        this.setState({surname: n});
    };

    render() {
        return (
            <div>
                <h2 className="App-header"> Hello world!</h2>

                <p className="p">Name: <input type="text" name="name"
                                              value={this.state.name}
                                              onChange={this.handleName}/>
                    Surname: <input type="text" name="surname"
                                    value={this.state.surname}
                                    onChange={this.handleSurname}/>
                    <Foo name={this.state.name} surname={this.state.surname}/></p>
                <Temp />
            </div>
        );
    }
}

class Foo extends Component {
    render() {
        return (<div>
                <h2>{this.props.name}:{this.props.surname}</h2>
            </div>

        );
    }
}


export default App1;
