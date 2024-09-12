import styles from './Button.module.css';

const Button = ({ text, type = "default" }) => {
    const btnType = type === "inverted" ? `${styles.btn} ${styles.btnInverted}` : styles.btn;

    return (
        <button className={btnType}>{text}</button>
    );
}

export default Button;
