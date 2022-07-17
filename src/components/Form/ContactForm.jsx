import React, { Component } from "react";
import css from './ContactForm.module.css'



class ContactForm extends Component{
    state = {
        name: '',
        number: ''
    }

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
  
    };
    onSubmitForm = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);

        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;
        return (
            
            <form action="" onSubmit={this.onSubmitForm} className={css.form}>
                <label htmlFor="" className={css.label_name}>
                    Name
                    <input 
                    
                        className={css.input_name}
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        placeholder="Denis Ivanov"
                    />
                </label>

                <label htmlFor="" className={css.label_number}>
                    Number
                    <input
                        className={css.input_number}
                        type="tel"
                        name="number"
                        value={number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        placeholder="777-77-77"
                    />
                </label>
                <button type="submit" className={css.btn_form}>Add Contact</button>
            </form>
        )
    }
}

export default ContactForm;