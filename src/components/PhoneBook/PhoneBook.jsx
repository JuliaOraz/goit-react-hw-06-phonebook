import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from 'components/ContactsForm';
import { ContactsFilter } from 'components/ContactsFilter';
import { ContactsList } from 'components/ContactsList';
import {
  ContainerPhoneBook,
  TitlePhoneBook,
} from 'components/PhoneBook/PhoneBook.styled';

export const PhoneBook = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = contact => {
    if (searchDuplicate(contact)) {
      return alert(`${contact.name} is already in contacts`);
    }

    setContacts(prevContacts => {
      const newContact = {
        id: nanoid(),
        ...contact,
      };

      return [...prevContacts, newContact];
    });
  };

  const searchDuplicate = ({ name }) => {
    return contacts.find(item => item.name === name);
  };

  const removeContacts = contactId => {
    setContacts(prevContacts => {
      const newContacts = prevContacts.filter(
        contact => contact.id !== contactId
      );

      return newContacts;
    });
  };

  const onChange = e => {
    const { value } = e.target;

    setFilter(value);
  };

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();

    if (!filter) {
      return contacts;
    }

    return contacts.filter(({ name }) => {
      const normalizedName = name.toLocaleLowerCase();
      return normalizedName.includes(normalizedFilter);
    });
  };

  const filterContacts = getFilterContacts();

  return (
    <ContainerPhoneBook>
      <TitlePhoneBook>Phonebook</TitlePhoneBook>
      <ContactsForm addContacts={addContacts} />
      <TitlePhoneBook>Contacts</TitlePhoneBook>
      {contacts.length > 0 ? (
        <>
          <ContactsFilter onChange={onChange} filter={filter} />
          <ContactsList
            items={filterContacts}
            onRemoveContacts={removeContacts}
          />
        </>
      ) : (
        'There are no contacts'
      )}
    </ContainerPhoneBook>
  );
};
