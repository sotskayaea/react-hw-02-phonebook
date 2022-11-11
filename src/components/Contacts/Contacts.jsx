import css from './Contacts.module.css';
import PropTypes from 'prop-types';



const Contacts = ({contacts, onDeleteContact}) => {
    return (
        <div className={css.contacts}>
           {contacts.length === 0 ? (
                <p>You haven`t any contacts in your Phonebook</p>
            ) : (
        <ul>
        {contacts.map(contact => (
            <li key={contact.id}>
                <p>{contact.name}</p>
                <p>{contact.number}</p>
                <button type='button' onClick={() => {
                    onDeleteContact(contact.id)}}>Delete</button>
            </li>
        )).reverse()}
        </ul>
        )} 
        </div>
    )
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
    onDeleteContact: PropTypes.func
}

export default Contacts