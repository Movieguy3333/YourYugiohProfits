import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <>
      <div className={styles.spinnerContainer}>
        <div className={styles["loader"]}></div>
        <span>Loading...</span>
      </div>
    </>
  );
}

export default Spinner;
