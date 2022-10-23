import { useSelector, useDispatch } from 'react-redux';
import { getFilterContacts } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';
import {
  FilterInput,
  FilterLabel,
} from 'components/ContactsFilter/ContactsFilter.styled';

export const ContactsFilter = () => {
  const filterContacts = useSelector(getFilterContacts);
  const dispatch = useDispatch();

  const onChange = e => {
    const { value } = e.target;

    dispatch(setFilter(value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filterContacts}
        onChange={onChange}
      />
    </FilterLabel>
  );
};
