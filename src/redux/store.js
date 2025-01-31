import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../redux/contacts/slice";
import filterSlice from "../redux/filters/slice";
import { authReducer } from "./auth/slice";
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice,
    auth: authReducer,
  },
});
