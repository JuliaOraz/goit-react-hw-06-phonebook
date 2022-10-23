import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { ContactsForm } from 'components/ContactsForm';
import { ContactsFilter } from 'components/ContactsFilter';
import { ContactsList } from 'components/ContactsList';
import {
  ContainerPhoneBook,
  TitlePhoneBook,
} from 'components/PhoneBook/PhoneBook.styled';

export const PhoneBook = () => {
  const contacts = useSelector(getContacts);

  return (
    <ContainerPhoneBook>
      <TitlePhoneBook>Phonebook</TitlePhoneBook>
      <ContactsForm />
      <TitlePhoneBook>Contacts</TitlePhoneBook>
      {contacts.length > 0 ? (
        <>
          <ContactsFilter />
          <ContactsList />
        </>
      ) : (
        'There are no contacts'
      )}
    </ContainerPhoneBook>
  );
};
