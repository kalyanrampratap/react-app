import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getUserData } from '../actions/index';

class Users extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Balance</th>
              <th>Company</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.userList.map((user) => (
                <tr key={user._id}>
                  <td><img src={user.picture} style={{ width: 42, height: 42 }} /></td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.balance}</td>
                  <td>{user.company}</td>
                  <td>{user.tags.join(', ')}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { userList: state.userList }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUserData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
