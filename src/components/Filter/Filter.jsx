import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className={styles.input}
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};

Filter.defaultProps = {
  value: "",
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
