import Contact from 'components/Contact';
import './ContactList.scss';

const ContactList = ({ filteredContacts, onDelete }) => {
  const filtered = filteredContacts();
  return (
    <ul className="Contacts-list">
      {filtered.map( ({ id, name, number }) => {
        return (
          <Contact key={id} id={id} name={name} number={number} onDelete={onDelete}/> 
        )})        
      }  
    </ul>
  )
};

export default ContactList;
