import css from './ContactList.module.css'


const ElementsList = ({listContacts, onDeleteContacts}) => (listContacts.map(({id, name, number}) => (
    <li key={id}  className={css.item}>
        <p>{name}: {number}</p>
       
        <button 
             className={css.list_btn}
            onClick={()=>{
                onDeleteContacts(id);
            }}
        >
            Delete
        </button>
    </li>
)))
export default ElementsList;



