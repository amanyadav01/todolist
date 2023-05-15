import React from 'react';

class AddTask extends React.Component {
  
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={(e) => this.props.handleSubmit(e)}>
                    <div className="two fields">
                        <div className="field">
                            <input
                             type="text"
                             value= {this.props.todovalue}
                             onChange={(e) => this.props.handelChange(e)}
                              />
                        </div>
                    
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTask;
