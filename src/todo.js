import React, { Component } from "react";
import "./App.css";
export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
            todoList: [],
            completed: {}
        };
        // this.handleCheck = this.handleCheck.bind(this);
        // this.setUpdate=this.setUpdate.bind(this);
    }
    handleText = (e) => {
        this.setState({ text: e.target.value });
    };

    addTodo = () => {
        
        let { text, todoList } = this.state;
        if(this.state.text != "")
        {
        if(this.state.text.length < 124)
        {
        let list = [...todoList];
        list.push(text);
        this.setState({ todoList: list, text: "" })
        }
        else
        {
            alert("Only 24 characters per task allowed")
        }
    }
    else
    {
        alert("Cannot Add Empty Task")
    }
    };

    delTodo = index => () => {
        // alert(index);
        
        const list2 = [...this.state.todoList];
        list2.splice(index, 1);
        this.setState({ todoList: list2 })
    };
    doneTodo = index => ()=> {
        // code to create line through completed item
        // alert("working"+index)
        this.setState(state => ({
            completed: { ...this.state.completed, [index]: !state.completed[index] }
        }));
    }
// setUpdate(text,key){
//     const items=this.state.items;
//     items.map(item=>{
// if(item.key ===key)
// {
//     item.text=text;
// }
// this.setState({
//     items:items
// })
//     })
// }

    render() {
        let { text, todoList } = this.state;
        return (
            <div className="App-header">
                {/* <div className="childApp"> */}
                    <h1 style={{ textAlign: "center" }}>To-Do APP!</h1>
                    <h3>You have {todoList.length} Todos</h3>
                    <br />
                    <ul className="list-group">
                        {todoList.map((val, index) => {
                            return (
                                <div className="mytodo">
                                    <li key={index} className="list-group-item">
                                        {/* <span className="spname" >   */}
                                        <input type="text" 
                                        onChange={
                                            (e)=>{
                                                
                                            }
                                        }
                                        className="spname" id={index} value={val} style={{textDecoration: this.state.completed[index]? "line-through": ""}}/>

                                        {/* </span> */}
                                        <button id={index} className="btn btn-default btn-s pull-right remove-item" onClick={this.delTodo(index)}>
                                            <span className="glyphicon glyphicon-remove"></span>
                                        </button>
                                        <button type="button" onClick={this.doneTodo(index)} className="btn btn-default btn-s pull-right remove-item">Done</button>
                                    </li>
                                    {/* <li key={index} className="displaylist">{val}</li>
                     <button type="button" className="btn btn-danger">Delete</button>          */}
                                </div>
                            );
                        }

                        )}
                    </ul>
                    <br />
                    <h4>Add a new To-Do</h4>
                    <input className="todoinput" name="text" value={text} placeholder="Enter new task" onChange={this.handleText} />
                    

                    <button type="button" onClick={this.addTodo} className="btn">Add Todo</button>

                    <br /><br />
                </div>
            // </div>
        );
    }


}