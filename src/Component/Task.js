import React from 'react';

class Task extends React.Component {

    render() {
        var viewstyle = {};
        var editstyle = {};

        if(this.props.editValue){
            viewstyle.display='none';
        } else {
            editstyle.display='none';
        }

        return (
            <div className="ui segment">
             <div className="item" style={viewstyle} onDoubleClick={(e) => this.props.handleEditing(e)}>
                 <div className="header">
                 
                 {this.props.todoValue.value}
                 <button
                  onClick={(e) => this.props.removetodo(this.props.id)} 
                  className="ui button" style={{margin:'10px 100px'}}>Remove</button>
                 </div>
            </div>
            <div className="field" style={editstyle}>
            <input type="text"  />
            </div>
            
            </div>
            
        )
    }
}

export default Task;
