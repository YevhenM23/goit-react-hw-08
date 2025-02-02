import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredContact = useSelector(selectFilteredContacts);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Something went wrong. No Contacts found.</h2>;
  }

  if (filteredContact.length === 0) {
    return <h2>No contacts available.</h2>;
  }

  return (
    <ul>
      {filteredContact.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
