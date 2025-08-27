import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    return (
        <div className={styles.wrapper}>
            <label className={styles.label}>
                <input
                    type="text"
                    value={filter}
                    placeholder="Пошук"
                    onChange={(e) => dispatch(changeFilter(e.target.value))}
                    className={styles.input}
                />
            </label>
        </div>
    );
};

export default SearchBox;
