import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  FormContacts,
  FormLabel,
  FormInput,
  FormButton,
} from 'components/ContactsForm/ContactsForm.styled';

export const ContactsForm = ({ addContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const onChangeForm = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();

    addContacts({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <FormContacts onSubmit={onSubmitForm}>
      <FormLabel htmlFor={nameId}>
        Name
        <FormInput
          id={nameId}
          type="tel"
          name="name"
          value={name}
          onChange={onChangeForm}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel htmlFor={numberId}>
        Number
        <FormInput
          id={numberId}
          type="tel"
          name="number"
          value={number}
          onChange={onChangeForm}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </FormContacts>
  );
};

ContactsForm.propTypes = {
  addContacts: PropTypes.func.isRequired,
};
