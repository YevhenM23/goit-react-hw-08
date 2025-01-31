import { createSlice } from "@reduxjs/toolkit";
import { deleteContact, addContact } from "../contacts/operations";
import { fetchContacts } from "../contacts/operations";

const contactsReducer = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = true;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = true;
      })
      .addCase(addContact.pending, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contactsReducer.reducer;
