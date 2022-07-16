import PropTypes from 'prop-types'; 

import css from './ContactList.module.css'

function ContactList({listContacts , onDeleteContacts}) {
    return ( 
        <ul className={css.list}>
            {listContacts.map(({ id, name, number }) => {
                return <li key={id} className={css.item}>
                    <p>{name}: {number}</p>
                    <button className={css.list_btn} type="button" onClick={() => onDeleteContacts(id)}>Delete</button>
                </li>
            })}
        </ul>
    )
}

ContactList.prototype = {
    listContacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
    onDeleteContacts:PropTypes.func.isRequired
}

export default ContactList;