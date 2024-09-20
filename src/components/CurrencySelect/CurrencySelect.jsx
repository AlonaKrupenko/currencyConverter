import styles from "./currencySelect.module.scss";
const CurrencySelect = ({ rates, selectedCurrency, onSelectChange }) => {
  const countryCode = selectedCurrency?.substring(0, 2)?.toLowerCase();

  return (
    <div className={styles.selectWrapper}>
      <div className={styles.flagWrapper}>
        <img src={`https://flagcdn.com/w80/${countryCode}.png`} alt="Flag" />
      </div>

      <select
        className={styles.select}
        value={selectedCurrency}
        onChange={(e) => onSelectChange(e.target.value)}
      >
        {Object?.keys(rates)?.map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelect;
