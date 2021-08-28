import './Contact.scss';
import PropTypes from 'prop-types';


const Contact = (({ name, number, id, onDelete }) => <li className="Contacts__item">
    <p className="Contacts__text">{name} : {number}</p>
    <button onClick={() => onDelete(id)} className="Contacts__button">Delete</button>
  </li>)

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}