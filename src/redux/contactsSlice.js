import { createSlice } from "@reduxjs/toolkit";

const sliceContact = createSlice({
    name: "contacts",
    initialState: {
        items: [],
    },
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload);
            /*return {
                ...state,
                contacts: {
                  items: [...state.contacts.items.id nanoid(),
                        name,
                        number,, action.payload]
                }
              };*/
        },
        deleteContact(state, action) {
            state.items = state.items.filter(contact => contact.id !== action.payload)
          /*  return {
                ...state,
                contacts: {
                  items: [...state.contacts.items.filter((contact) => contact.id !== contactId)]
                }
              },*/
        },
    },
});
export const {addContact, deleteContact} = sliceContact.actions;
export default sliceContact.reducer;

  