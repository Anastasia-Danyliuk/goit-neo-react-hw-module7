import { useDispatch } from "react-redux";
import { useState } from "react";
import { addContact } from "../../redux/contactsOps";
import "./ContactsForm.module.css";

const ContactForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!/^\d+$/.test(phone)) {
            alert("Номер телефону має містити лише цифри");
            return;
        }
        dispatch(addContact({ name, number: phone }));
        setName("");
        setPhone("");
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <label className="label">
                <input
                    type="text"
                    placeholder="Ім'я"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input"
                />
            </label>
            <label className="label">
                <input
                    type="text"
                    placeholder="Номер"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="input"
                />
            </label>
            <button type="submit" className="button">
                Додати
            </button>
        </form>
    );
};

export default ContactForm;
