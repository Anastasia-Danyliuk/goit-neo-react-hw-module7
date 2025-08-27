import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import ContactItem from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();

    return (
        <ul className={styles.list}>
            {contacts.map((contact) => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                    onDelete={(id) => dispatch(deleteContact(id))}
                />
            ))}
        </ul>
    );
};

export default ContactList;