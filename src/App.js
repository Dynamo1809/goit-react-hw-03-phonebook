import { Component } from 'react';
// Components //
import { ContactForm }  from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
// import Contact from 'components/Contact';

import { v4 as uuidv4 } from 'uuid'; 


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if(parsedContacts) {
      this.setState({ contacts : parsedContacts });
    }
  };

  componentDidUpdate( prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = ( newName, number) => {
    const { contacts } = this.state;
    const duplicateName = contacts.some( ({ name }) => newName === name)

    const contact = {
      id: uuidv4(),
      name: newName, 
      number,
    };

    duplicateName 
      ? alert(`${newName} is already in contacts`)
      : this.setState( ({contacts}) => ({
          contacts: [contact, ...contacts]
        }));
  };

  deleteContact = (contactId) => {
    this.setState( prevState => ({
      contacts: prevState.contacts.filter( ({ id }) => id !== contactId)
    }))
  }

  handleChange = (e) => {
    const { name, value, } = e.currentTarget;  
    this.setState({ [name]: value })
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilterName = filter.toLowerCase().trim();
    return contacts.filter( ({ name }) => name.toLowerCase().includes(normalizedFilterName));
  };

  render() {
    const { filter } = this.state;
    return (      
      <div className="App">
        <h1 className="Phonebook-title">Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleChange} filter={filter}/>
        <ContactList onDelete={this.deleteContact} filteredContacts={this.getVisibleContacts}/>
      </div>
    )
  };
};
