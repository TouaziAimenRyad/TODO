import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Todoitem extends Component {

    getStyle=()=>{
        /*if (this.props.todo.completed){
            return {textDecoration:'line-through'}
        }else{
            return {textDecoration: 'none'}
        }*/
        return {
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration : this.props.todo.completed ? 'line-through' : 'none'
        }
    }



    render() {
        /*you can creat a const object and put the style in it and then you put the object in th div without doubeling the currly brackets*/
       const {id,title}=this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,this.props.todo.id)}/>
                    {'   '}
                    {this.props.todo.title}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>X</button>
                </p>
            </div>
        );
    }
}

//proptypes
Todoitem.propTypess={
    todos: PropTypes.object.isRequired
}

const btnStyle={
    background:'#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 5px',
    borderRadius:'100%',
    cursor:'pointer',
    float :'right',

}
export default Todoitem;