import React,{Component} from 'react';

class Addtodo extends Component{
    state={
        content:""
    }
    handleChange=(e)=>{
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:""
        })
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label name="addtodo">Add todo</label>
                    <input onChange={this.handleChange} type="text" value={this.state.content}></input>
                </form>
            </div>
        )
    }
}
export default Addtodo;