import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { selectLoading, selectError } from "./redux/contactsSlice";
import ContactForm from "./components/ContactsForm/ContactsForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div style={{ maxWidth: "600px", margin: "20px auto", padding: "10px" }}>
            <h1>Книга контактів</h1>
            <ContactForm />
            <SearchBox />
            {loading && <p>Оновлення книги контактів</p>}
            {error && <p style={{ color: "red" }}>Помилка: {error}</p>}
            <ContactList />
        </div>
    );
}

export default App;