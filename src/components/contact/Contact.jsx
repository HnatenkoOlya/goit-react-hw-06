import css from './Contact.module.css'
import { FaUser } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

export default function Contact  ({data: {id, name, number}, onDelete}) {
 return (
    <div className={css.divContact}>
        <div className={css.icon}>
        <p className={css.textContact}><FaUser  className={css.iconContact} size="19px"/>{name}</p>
        <p className={css.textContact}><FaPhoneVolume  className={css.iconContact} size="19px"/>{number}</p>
        </div>
        <button className={css.btnContact} onClick={() => onDelete(id)}>Delete</button>
    </div>
 )
}