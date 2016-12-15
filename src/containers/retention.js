import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getUserData } from '../actions/index';

class Retention extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: null
    }
  }

  generateDataForRetention() {
    return this.props.userList
      .filter(user => !user.isActive)
      .sort((a, b) => {
        a = new Date(a.registered.split('+')[0].trim());
        b = new Date(b.registered.split('+')[0].trim());
        return a > b ? -1 : a < b ? 1 : 0;
      });
  }

  renderModal(data) {
    console.log(data)
    if (!data)
      return;

    return (
      <div id='retention'
        className="modal"
        role="dialog"
        style={{ display: 'block' }}>

        <div className="modal-dialog">

          <div className="modal-content">
            <div className="modal-header">
              <button type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => { this.onClickCloseButton() } }>&times;</button>

              <h4 className="modal-title">User Details JSON</h4>
            </div>

            <div className="modal-body">
              <p>{JSON.stringify(data)}</p>
            </div>

            <div className="modal-footer">
              <button type="button"
                className="btn btn-default"
                data-dismiss="modal"
                onClick={() => { this.onClickCloseButton() } }>Close</button>
            </div>
          </div>

        </div>
      </div>
    );
  }

  onClickCloseButton() {
    this.setState({ selectedUser: null });
  }

  render() {
    return (
      <div>
        {this.renderModal(this.state.selectedUser)}
        <ul className="list-group">
          <li className="list-group-item"
            style={{ textAlign: 'center' }}>
            <h4>List Of Inactive Users</h4>
          </li>
          {this.generateDataForRetention().map((user) => (
            <li key={user._id} className="list-group-item">
              <a style={{ cursor: 'pointer' }}
                onClick={() => { this.setState({ selectedUser: user }) } }

                >{user.name}</a> | {user.registered}
            </li>
          ))}

        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Retention);
