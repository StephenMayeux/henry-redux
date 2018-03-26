import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from './logo.svg';
import { actionCreators } from '../../actions';
import './App.css';
import PeopleList from '../PeopleList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            onClick={this.props.actions.addPerson}
          />
          <h1 className="App-title">Welcome to React People</h1>
        </header>
        <div className="App-container container">
          <p className="App-intro">
            Click the React logo to add people. Click their card to remove them.
          </p>
          <PeopleList people={this.props.people} removePerson={this.props.actions.removePerson} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.people
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
