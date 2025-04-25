import Contact from '../contact/Contact.jsx'
import css from './ContactList.module.css'
import { useSelector } from 'react-redux';

export default function ContactList ({ onDelete}) {
    const contactsR = useSelector(state=>state.contacts.items)
 return (
    <ul className={css.listContact}>
        {contactsR.map((contact) => (
            <li className={css.itemContact} key={contact.id}>
                <Contact data={contact} onDelete={onDelete} />
            </li>
        ))}
    </ul>
 )
}
//contacts,