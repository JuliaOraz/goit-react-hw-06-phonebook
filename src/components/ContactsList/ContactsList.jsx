import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { removeContacts } from 'redux/contactsSlice';
import { getVisibleContacts } from '../../redux/selectors';
import { ContactsItem } from 'components/ContactsList/ContactsItem';
import { ListContacts } from 'components/ContactsList/ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onRemoveContacts = contactId => dispatch(removeContacts(contactId));

  return (
    <ListContacts>
      <ContactsItem items={contacts} onRemoveContacts={onRemoveContacts} />
    </ListContacts>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
