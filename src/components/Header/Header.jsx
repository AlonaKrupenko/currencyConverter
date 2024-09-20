import styles from "./header.module.scss";

const Header = ({ rates }) => {
  return (
    <div className={styles.header}>
      <div className={styles.contentWrapper}>
        <div>
          <p className={styles.rates}>1EUR = {rates["UAH"]?.toFixed(4)}UAH</p>
          <p className={styles.rates}>
            1USD = {((rates["UAH"] * rates["EUR"]) / rates["USD"])?.toFixed(4)}
            UAH
          </p>
        </div>
        <h1 className={styles.headerText}>Currency converter</h1>
      </div>
    </div>
  );
};

export default Header;
