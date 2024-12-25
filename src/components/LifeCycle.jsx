import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = { hello : "World!" };
    }
    componentWillMount(){
        console.log("componentWillMount()");
    }
    componentDidMount(){
        console.log("componentDidMount()");
    }
    changeState(){
        this.setState({ hello : "Geek!" });
    }
    render(){
        return (
            <div>
            <h1>GeeksForGeeks.org, Hello{ this.state.hello }</h1>
            <h2>
            <a onClick={this.changeState.bind(this)}>Press Here!</a>
            </h2>
            </div>);
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate()");
        return true;
    }
    componentWillUpdate(){
        console.log("componentWillUpdate()");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate()");
    }
}
ReactDOM.render(
    <Test />,
    document.getElementById('root')
);

// life cycle method in React class component
// Initialization componentWillMount() componentDidMount(): componentWillUnmount()

// There are 3 phases in the React Component LifeCycle:
// 1. Mounting Phase
// 2. Updating Phase
// 3. Un-Mounting Phase
