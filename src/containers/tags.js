import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getUserData } from '../actions/index';

class Tags extends Component {
  constructor(props) {
    super(props);
  }

  getUniqueTags() {
    let tagList = [];
    this.props.userList.forEach((user) => {
      tagList = tagList.concat(user.tags);
    });
    return tagList.filter((tag, i, arr) => arr.indexOf(tag) == i);
  }

  generateDataForTagTable() {
    return this.getUniqueTags().map((tag) => {
      let allUsersBelongsToCurrentTag = this.props.userList.filter((user) => (user.tags.indexOf(tag) > -1));

      return {
        tagName: tag,
        totalUsers: allUsersBelongsToCurrentTag.length,
        sumOfBalance: ('$' + allUsersBelongsToCurrentTag.reduce(
          (total, user) => (total + parseFloat(user.balance.replace(/[,$]/g, ""))), 0).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'))
      }
    });

  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Total Users</th>
              <th>Sum of Balance</th>
            </tr>
          </thead>
          <tbody>
            {
              this.generateDataForTagTable().map((tagDetails) => (
                <tr key={tagDetails.tagName}>
                  <td>{tagDetails.tagName}</td>
                  <td>{tagDetails.totalUsers}</td>
                  <td>{tagDetails.sumOfBalance}</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
