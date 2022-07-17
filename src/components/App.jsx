import React, { Component } from "react";
import Container from "./Container";
import ContactForm from "./Form/ContactForm";
import ContactList from "./ContactList";
import shortid from "shortid";
import Filter from "./Filter";
import ElementsList from "./ContactList/ElementsList";

class App extends Component{
  state = {
      contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }


  onDeleteContacts = index => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== index)
    }))
  };

  onSubmit = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number
    };
    const { contacts } = this.state
    const normalize = name.toLowerCase();
 if (
      contacts.find(
        contact => contact.name.toLowerCase() === normalize,
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    }  else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };


  

  changeFilter = e => {
    this.setState({filter:e.currentTarget.value})
  }

  getVisibleContactName = () => {
    const {contacts} = this.state
    const normalizedFilter = this.state.filter.toLocaleLowerCase();

    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter))
  }

  render() {

   const {filter} = this.state

  
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} />
        <h1>Contacts</h1>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList listContacts={this.getVisibleContactName()} onDeleteContacts={this.onDeleteContacts}/>
       
      </Container>  
    )
  }
}


export default App;