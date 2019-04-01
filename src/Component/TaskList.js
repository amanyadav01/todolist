import React from 'react';
import Task from './Task';


class TaskList extends React.Component {
   
    render() {
        return (
            <div>
            {this.props.todos.map((item) => {
                return (
                    <Task 
                        key={item.id} 
                        todoValue={item} 
                        id={item.id} 
                        removetodo={this.props.handelRemove}
                        editValue = {this.props.editingValue}
                        handleEditing = {this.props.handleEditing}
                        />
                )
            })}
            </div>
        )
    }
}

export default TaskList;
