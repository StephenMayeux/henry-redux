import React, { Component } from 'react';
import logo from './logo.svg';
import faker from 'faker';
import './App.css';
import PeopleList from '../PeopleList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };

    this.addPerson = this.addPerson.bind(this);
    this.removePerson = this.removePerson.bind(this);
  }

  addPerson() {
    const person = {
      first: faker.name.firstName(),
      last: faker.name.lastName(),
      title: faker.name.jobTitle(),
      bio: faker.lorem.sentence(),
      id: faker.random.uuid()
    }

    const { people } = this.state;
    people.unshift(person);
    this.setState({ people });
  }

  removePerson(uuid) {
    const people = this.state.people.filter(person => person.id !== uuid);
    this.setState({ people });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            onClick={this.addPerson}
          />
          <h1 className="App-title">Welcome to React People</h1>
        </header>
        <div className="App-container container">
          <p className="App-intro">
            Click the React logo to add people. Click their card to remove them.
          </p>
          <PeopleList people={this.state.people} removePerson={this.removePerson} />
        </div>
      </div>
    );
  }
}

export default App;
