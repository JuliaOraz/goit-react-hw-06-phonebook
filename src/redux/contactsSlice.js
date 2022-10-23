import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
    },
    removeContacts: (state, action) =>
      state.filter(({ id }) => id !== action.payload),
  },
});

export const { addContacts, removeContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
