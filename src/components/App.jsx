import ContactForm from './contactform/ContactForm.jsx'
import ContactList from './contactlist/ContactList.jsx'
import SearchBox from './searchbox/SearchBox.jsx';
import './App.css'

export default function App () {

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      <ContactList/>
   </div>

  )
}
