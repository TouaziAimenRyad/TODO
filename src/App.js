import React, {Component} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import Header from "./components/layout/header";
import Addtodo from "./components/addtodo"
import './App.css';
import Todos  from "./components/Todos";
import About from "./components/pages/about";

class App extends Component{
    state={
        todos:[
            {
                id:uuidv4(),
                title:'take out trash',
                completed:false
            },
            {
                id:uuidv4(),
                title:'play cs go',
                completed:false
            },
            {
                id:uuidv4(),
                title:'go out with friends',
                completed:false
            }
        ]
    }

    markComplete =(id)=>{
        //console.log(id);
        this.setState({todos:this.state.todos.map(todo => {
            if(todo.id===id){
                todo.completed=!todo.completed;
            }
            return todo;
            })});
    }

    delTodo=(id)=>{
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    }

    addTodo=(title)=>{
        const newTdo={
            id:uuidv4(),
            title:title,
            completed:false,
        }
        this.setState({todos: [...this.state.todos,newTdo]})
    }
    render(){
  return (
      <Router>
    <div className="App">
        <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
                <React.Fragment>
                    <Addtodo addTodo={this.addTodo}/>
                    <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                </React.Fragment>
            )}/>
            <Route path="/about" component={About}/>
        </div>

    </div>
      </Router>
  );
}
}

export default App;
