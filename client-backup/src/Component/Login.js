import React from 'react';

class Login extends React.Component {

  render() {
        return(
            <div className="ui equal width form" style={{margin : '10px'}}>
                 <span style={{fontSize:'30px' , fontWeight:'bold'}}>Login User</span>
                <div className="field">
                    <label>USerName</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="text" />
                </div>
                <div>
                    <button className="ui button">Login</button>
                </div>
            </div>
        )
  }
}

export default Login;