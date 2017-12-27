import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ContactList extends React.Component {
  render() {
    const people = this.props.contacts
    return <ol>
      {people.map(person => (<li key = {person.name}>{person.name}</li>))}
    </ol>
  }
}
/* This.props.contacts will deliver new contacts to components to make it reusable */
class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
          {name: 'Michael'},
          {name: 'Ryan'},
          {name: 'Tyler'}
        ]}/>
        <ContactList contacts={[
          {name: 'Yangqiao'},
          {name: 'Bridge'},
          {name: 'Sofie'}
        ]}/>
      </div>
    );
  }
}

export default App;
