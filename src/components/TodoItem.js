import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    // getStyle = () => {
    //     if(this.props.todo.completed) {
    //         return {
    //             textDecoration: 'line-through'
    //         }
    //     } else {
    //         return {
    //             textDecoration: 'none'
    //         }
    //     }
    // }    longer code to write, so we will use tenary operator and write a shorter code below

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }


    render() {
        const { id, title } = this.props.todo;
        return (
            // <div style={{ backgroundColor: '#f4f4f4' }}> use double braces for inline style 
            // <div style={ itemStyle }>   use single braces when using variable for styling 
            // using styling in a function like the getStyle function                   
            <div style={this.getStyle()}>                     
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

export default TodoItem
