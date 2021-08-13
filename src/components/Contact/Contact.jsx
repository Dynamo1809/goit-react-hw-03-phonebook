import './Contact.scss';

const Contact = (({ name, number, id, onDelete }) => <li className="Contacts__item">
    <p className="Contacts__text">{name} : {number}</p>
    <button onClick={() => onDelete(id)} className="Contacts__button">Delete</button>
  </li>)

export default Contact;