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


export default ContactList;