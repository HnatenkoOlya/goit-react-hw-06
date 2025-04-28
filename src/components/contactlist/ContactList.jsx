import Contact from '../contact/Contact.jsx'
import css from './ContactList.module.css'
import { useSelector } from 'react-redux';

export default function ContactList () {

    const contacts = useSelector(state=>state.contacts.items);
    const filter = useSelector(state => state.filters.name || '').toLowerCase();
    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );

      /*console.log('contacts', contacts);
      console.log('filter', filter);
      console.log('visibleContacts', visibleContacts);*/

 return (
    <ul className={css.listContact}>
        {visibleContacts.map(contact => (
            <li className={css.itemContact} key={contact.id}>
                <Contact contact={contact}/>
            </li>
        ))}
    </ul>
 );
}