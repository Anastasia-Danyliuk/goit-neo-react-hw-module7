import styles from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
    const phone =
        contact.phone ??
        contact.number ??
        contact.phoneNumber ??
        contact.tel ??
        "";
    return (
        <li className={styles.item}>
      <span className={styles.text}>
        {contact.name}: {phone || "—"}
      </span>
            <button
                className={styles.button}
                onClick={() => onDelete(contact.id)}
            >
                Delete
            </button>
        </li>
    );
};

export default Contact;
