export const getContacts = state => state.contacts;
export const getFilterContacts = state => state.filter;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilterContacts(state);

  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) => {
    const normalizedName = name.toLowerCase();
    return normalizedName.includes(normalizedFilter);
  });
};
