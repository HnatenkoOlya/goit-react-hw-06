import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid';
import ContactForm from './contactform/ContactForm.jsx'
import ContactList from './contactlist/ContactList.jsx'
import SearchBox from './searchbox/SearchBox.jsx';
import './App.css'

export default function App () {
  const [contacts, setContacts] = useState(() => {
    const savedChanges = localStorage.getItem("change-contacts");
    return savedChanges ? JSON.parse(savedChanges) : [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]
  })
  
  useEffect(() => {
    localStorage.setItem('change-contacts', JSON.stringify(contacts));
  }, [contacts]); 
  
  const addContact = ({name, number}) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    }
    setContacts((prevtContacts) => {
      return [...prevtContacts, newContact];
    })
  };
  
  const [search, setSearch] = useState("");
  const searchContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()))

  const deleteContact = (contactId) => {
    setContacts(prevtContacts => {
      return prevtContacts.filter((contact) => contact.id !== contactId);
    })
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact}/>
      <SearchBox value={search} onSearch={setSearch}/>
      <ContactList contacts = {searchContacts} onDelete = {deleteContact}/>
   </div>

  )
}
