import styles from "./Button.module.css"

const modulecss = () => {
    return (
        <div className={styles.page}>
            <div className={styles.button_orange}>Click Me</div>
            <div className={styles.button_green}>Click Me</div>
            <div className={styles.button_blue}>Click Me</div>
            <div className={styles.button_pink}>Click Me</div>
        </div>
    );
};

export default modulecss;