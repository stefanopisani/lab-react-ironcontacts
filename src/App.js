import logo from './logo.svg';
import './App.css';
import contactsFromJSON from "./contacts.json";
import React from 'react';

class App extends React.Component {
  state= {
    contacts: contactsFromJSON.slice(0,5)
  }

// 
  addRandomContact = ()=> {
    const randomNumber = Math.floor(Math.random() * (contactsFromJSON.length - 5) + 5);
    const randomContact = contactsFromJSON[randomNumber];

    this.setState({
      contacts: this.state.contacts.concat(randomContact)
    });
  }

  sortByName = () => {
    const {contacts} = this.state;

    function compare(a, b) {
      const contactA = a.name;
      const contactB = b.name;
    
      let comparison = 0;
      if (contactA > contactB) {
        comparison = 1;
      } else if (contactA < contactB) {
        comparison = -1;
      }
      return comparison;
    }
    
    const sortedContactsByName = contacts.sort(compare);

    this.setState({
      contacts: sortedContactsByName
    });
  }

  sortByPopularity = () => {
    const {contacts} = this.state;

    function compare(a, b) {
      const contactA = a.popularity;
      const contactB = b.popularity;
    
      let comparison = 0;
      if (contactA > contactB) {
        comparison = 1;
      } else if (contactA < contactB) {
        comparison = -1;
      }
      return comparison;
    }
    
    const sortedContactsByPopularity = contacts.sort(compare);

    this.setState({
      contacts: sortedContactsByPopularity
    });
  }

  deleteContact = (id)=> {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id)
  });
  }

  render() {
    const {contacts} = this.state;
    return (
      <div className="App">
        <h1> Ironcontacts </h1>
        <button onClick={this.addRandomContact}> Add random contact </button>
        <button onClick={this.sortByName}> Sort by name </button>
        <button onClick={this.sortByPopularity}> Sort by popularity </button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {contacts.map((contact) => {
            
              return (
                <>
                <tr>
                  <td> <img src={contact.pictureUrl} alt="" style={{height:75, width:50}}/> </td>
                  <td> {contact.name} </td>
                  <td> {contact.popularity} </td>
                  <td> <button onClick={() => this.deleteContact(contact.id)}> Delete </button> </td>
                </tr>
                </>
                );
            })}

        </table>
      </div>
    );
  }
  

}

export default App;
