import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.contactWrapper}>
      <FaUser /> {contact.name}
      <FaPhone /> {contact.number}
      <button
        className={s.btnDelete}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
