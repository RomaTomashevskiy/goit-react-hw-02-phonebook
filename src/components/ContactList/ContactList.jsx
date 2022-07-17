// import PropTypes from 'prop-types'; 
import ElementsList from './ElementsList';

import css from './ContactList.module.css'

function ContactList({listContacts , onDeleteContacts}) {
    return (
        <ul className={css.list}>
            <ElementsList listContacts={listContacts} onDeleteContacts={onDeleteContacts} />
        </ul>
    )
}


export default ContactList;

