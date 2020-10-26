import React, {Component} from 'react';
import Todos from "./Todos";
import Addtodo from "./addTodos";
class App extends Component {
  state = {
    todos  :[
      {id:1,content:"buy milk"},
      {id:2,content:"killbutterfly"}
    ]
  }
  deleteTodo=(id)=>{
    const todos=this.state.todos.filter(todos=>{
      return todos.id!==id
    })
    this.setState({
      todos
    })
  }
  addTodo=(todo)=>{
    todo.id=Math.random()*100;
    var todosnew=[...this.state.todos,todo];
    this.setState({
      todos:todosnew
    })
  }
  render(){
    return (
      <div className="App container">
        <h4 className="center purple-text text-darken4">Todo's</h4>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <Addtodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
