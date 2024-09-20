import CurrencySelect from "../CurrencySelect/CurrencySelect";
import styles from "./currencyInput.module.scss";

const CurrencyInput = ({
  type,
  currency,
  rates,
  amount,
  onAmountChange,
  onCurrencyChange,
}) => {
  const handleAmountChange = (e) => {
    const regex = /^\d*\.?\d*$/;

    if (regex.test(e.target.value)) {
      onAmountChange(e.target.value);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputBlock}>
        <span className={styles.inputTitle}>{type}</span>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
      </div>
      <CurrencySelect
        rates={rates}
        selectedCurrency={currency}
        onSelectChange={onCurrencyChange}
      />
    </div>
  );
};

export default CurrencyInput;
