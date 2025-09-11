import Logo from "./Logo";
import styles from "./Header.module.css";

import HeaderNav from "./HeaderNav";

function Header() {
  return (
    <header className={styles.header}>
      {" "}
      <Logo />
      <h1 className={styles["website-header"]}>YourYugiohProfits</h1>
      <HeaderNav />
    </header>
  );
}

export default Header;
