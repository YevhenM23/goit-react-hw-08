import "./App.css";
import axios from "axios";

// import ContactForm from "../src/components/ContactForm/ContactForm";
// import SearchBox from "../src/components/SearchBox/SearchBox";
// import ContactList from "../src/components/ContactList/ContactList";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contacts/operations";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Contacts from "./pages/Contacts";
import Layout from "./components/Layout/Layout";

axios.defaults.baseURL = "https://67911a51af8442fd73790976.mockapi.io";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
