import Contact from '../contact/Contact.jsx'
import css from './ContactList.module.css'
export default function ContactList ({contacts, onDelete}) {
 return (
    <ul className={css.listContact}>
        {contacts.map((contact) => (
            <li className={css.itemContact} key={contact.id}>
                <Contact data={contact} onDelete={onDelete} />
            </li>
        ))}
    </ul>
 )
}