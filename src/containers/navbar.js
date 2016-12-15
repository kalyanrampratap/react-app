import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {onNavClickHandler} from '../actions/index';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  
  render(){
      return (
        <div>
          <ul className="nav nav-pills nav-stacked">
            <li role="presentation"
              className={(this.props.activeNav === 'Users') ? 'active' : ''}
              onClick={() => {
                this.props.onNavClickHandler('Users')
              } }>
              <a href="#">Users</a>
            </li>
            <li role="presentation"
              className={(this.props.activeNav === 'Tags') ? 'active' : ''}
              onClick={() => {
                this.props.onNavClickHandler('Tags')
              } }>
              <a href="#">Tags</a>
            </li>
            <li role="presentation"
              className={(this.props.activeNav === 'Retention') ? 'active' : ''}
              onClick={() => {
                this.props.onNavClickHandler('Retention')
              } }>
              <a href="#">Retention</a>
            </li>
          </ul>
        </div>
      );
    }
}

function mapStateToProps(state) {
    return {activeNav: state.activeNav}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({onNavClickHandler}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

