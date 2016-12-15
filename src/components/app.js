import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../containers/navbar';
import Users from '../containers/users';
import Tags from '../containers/tags';
import Retention from '../containers/retention';

class App extends Component {

  renderView() {
    if (this.props.activeNav === 'Users')
      return <Users />;
    else if (this.props.activeNav === 'Tags')
      return <Tags />;
    else if (this.props.activeNav === 'Retention')
      return <Retention />;
  }
  render() {
    return (
      <div className="container">
        <div className="row" style={{ paddingTop: '40px' }}>

          <div className="col-md-3">
            <NavBar />
          </div>

          <div className="col-md-9">
            {this.renderView()}
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { activeNav: state.activeNav }
}

export default connect(mapStateToProps)(App);

