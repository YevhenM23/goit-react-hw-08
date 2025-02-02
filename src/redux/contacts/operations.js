import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { goitApi } from "../auth/operations";

axios.defaults.baseURL = "https://connections-api.goit.global";
// axios.defaults.baseURL = "https://678fdd0f49875e5a1a93a664.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("No auth token provided");
    }
    try {
      const { data } = await goitApi.get("/contacts");
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      await goitApi.delete(`/contacts/${id}`);
      thunkAPI.dispatch(fetchContacts());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkAPI) => {
    try {
      const { data } = await goitApi.post("/contacts", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const selectContact = createAsyncThunk(
  "contacts/selectContact",
  async ({ id, body }, thunkAPI) => {
    try {
      await goitApi.patch(`/contacts/${id}`, body);
      thunkAPI.dispatch(fetchContacts());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
