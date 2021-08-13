import { Component } from 'react';
import './ContactForm.scss';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value })
  };

  formSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.addContact( name, number );
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: ''})
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="Phonebook-form" onSubmit={this.formSubmit}>         
        <label className="Phonebook__label">
          Name:<br></br><input
            className="Phonebook__input"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Ім'я може складатись тільки з букв, апострофа, тире і пробілів. Наприклад Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan і т. п."
            required
          />
        </label> 
        <label className="Phonebook__label">
          Number:<br></br><input
            className="Phonebook__input"
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Телефон повинен складатись з цифр і може містити пробіли, тире, круглі скобки і може починатися з + ."
            required
          />
        </label>
        <button className="Phonebook__button" type="submit" >Add contact</button>
      </form>
    )
  };
};