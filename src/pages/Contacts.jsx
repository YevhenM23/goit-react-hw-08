import ContactList from "../../src/components/ContactList/ContactList";
import ContactForm from "../../src/components/ContactForm/ContactForm";
import SearchBox from "../../src/components/SearchBox/SearchBox";

const Contacts = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default Contacts;
