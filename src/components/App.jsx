import { Component } from "react";
import PropTypes from 'prop-types';
import ContactForm from "./ContactForm";
import Contacts from "./Contacts";
import Filter from "./Filter"
import {nanoid} from 'nanoid'




 class App extends Component{
  state = {
    contacts: [],
    filter:''
    
  }

  handleFormSubmit = (data) => {
    this.validationContacts(data)
  }

  validationContacts =(data) => {
    const currentData = this.state.contacts;
    const normalizedName = data.name.toLowerCase();

    const existContact = currentData.filter(el => el.name.toLowerCase() === normalizedName)
    if(existContact.length > 0){
      window.alert(`${data.name} is already in the Phonebook`)
      return
    }
    currentData.push({...data, id: nanoid()})
    this.setState({
      contacts: currentData
    })
  }

  onChangeContacts = (id) =>{
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id)
    })
  }

  changeFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value
    })


  }


  render(){
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    return(
      <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.handleFormSubmit} />
      <h2>Contacts</h2>
      <Filter 
      value={this.state.filter} 
      onChangeFilter ={this.changeFilter}
      />
      <Contacts 
      contacts={visibleContacts}
      onDeleteContact={this.onChangeContacts}
      />
      </>
    )
   
  }
 }

 App.propTypes = {
  state: PropTypes.exact({
    contacts: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })),
    filter: PropTypes.string
  }),
  handleFormSubmit: PropTypes.func,
  validationContacts: PropTypes.func,
  onChangeContacts: PropTypes.func,
  changeFilter: PropTypes.func
 }


export default App