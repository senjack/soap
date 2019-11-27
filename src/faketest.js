import React from 'react';
import { timeout } from 'q';

class sideBar extends React.Component{
    constructor(props){
        super(props);
            this.state = {name: 'tim', age: 14}
    }
    handleClick(name) => {
        this.setState({name: 'name'});
    }  

    render(){
        
        
        return(
            <div>
                <button onClick = {() => { console.log('hello world')}}>echo hello world</button>
                <button onSubmit = {() => {this.setState(name: John)}}></button>



            </div>
        );
    }
}