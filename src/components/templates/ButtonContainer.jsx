import styles from "../styles/ButtonContainer.module.css";
let ButtonContainer = ({ children }) => {
  return <div className={styles.ButtonContainer}>{children}</div>;
};

export default ButtonContainer;
