import styles from "./Logo.module.css";

function Logo() {
  return (
    <>
      {" "}
      <img
        src="/logo.png"
        alt="YourYugiohProfits Logo"
        className={styles.logo}
      />
    </>
  );
}

export default Logo;
