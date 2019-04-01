import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends React.Component {

    state={ 
        todovalue : '',
        todos : [
            {id : 1, value : 'this is Fist Task'},
            {id : 2, value : 'this is Second Task'},
            {id : 3, value : 'this is Third Task'},
            {id : 4, value : 'this is Fourth Task'},
        ],
        nextId : 5,
        editing : false
    }

    handleChange = (e) => {
        this.setState({todovalue : e.target.value});
     }
    
     handleSubmit = (e) => {
        e.preventDefault();
        const newtodo = {id:this.state.nextId, value:this.state.todovalue};
        const todos = this.state.todos;
        todos.push(newtodo);
        this.setState({
            todos : todos,
            nextId : ++this.state.nextId,
            todovalue : ''
            
        })

     }
     
     handleEditing = (e) => {
        this.setState({ editing : true })
    }

     handelRemove = (id) => {
         console.log(id);
         this.setState({
             todos : this.state.todos.filter((todo, index) => todo.id !== id)
         })
         
     }

   
   
    render() {
        return (
            <div className="container" style={{marginTop:'40px'}}>
                <AddTask 
                    inputValue={this.state.todovalue}
                    handelChange={this.handleChange}
                    handleSubmit = {this.handleSubmit} />

                <TaskList 
                    todos={this.state.todos} 
                    handelRemove = {this.handelRemove}
                    editingValue = {this.state.editing}
                    handleEditing = {this.handleEditing} />

            </div>
        )
    }
}
export default App;