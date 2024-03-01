import PropTypes from "prop-types";

import styles from "./Button.module.css";

function Button({ type, onClick, children }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
