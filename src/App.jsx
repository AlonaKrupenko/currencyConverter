import styles from "./App.module.scss";

import { useEffect, useState } from "react";
import CurrencyInput from "./components/CurrencyInput/CurrencyInput";
import Header from "./components/Header/Header";
import ArrowsIcon from "./components/Icons/ArrowsIcon";

function App() {
  const [rates, setRates] = useState([]);

  const [sourceAmount, setSourceAmount] = useState(0);
  const [targetAmount, setTargetAmount] = useState(0);
  const [sourceCurrency, setSourceCurrency] = useState("EUR");
  const [targetCurrency, setTargetCurrency] = useState("UAH");

  const BASE_URL = `http://data.fixer.io/api/latest?access_key=c5a721827b7ff10a8753fc8180807801`;

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setRates(data.rates);
      })
      .catch((error) => {
        console.error("There was an error fetching data:", error);
      });
  }, []);

  const getAmount = (inputAmount, fromCurrencyStart, toCurrency) => {
    return (
      (inputAmount * rates[fromCurrencyStart]) /
      rates[toCurrency]
    )?.toFixed(4);
  };

  const handleSourceAmountChange = (sourceAmount) => {
    setTargetAmount(getAmount(sourceAmount, targetCurrency, sourceCurrency));
    setSourceAmount(sourceAmount);
  };

  const handleSourceCurrencyChange = (sourceCurrency) => {
    setTargetAmount(getAmount(sourceAmount, targetCurrency, sourceCurrency));
    setSourceCurrency(sourceCurrency);
  };

  const handleTargetAmountChange = (targetAmount) => {
    setSourceAmount(getAmount(targetAmount, sourceCurrency, targetCurrency));
    setTargetAmount(targetAmount);
  };

  const handleTargetCurrencyChange = (targetCurrency) => {
    setSourceAmount(getAmount(targetAmount, sourceCurrency, targetCurrency));
    setTargetCurrency(targetCurrency);
  };

  const handleSwitchClick = () => {
    const newAmount1 = targetAmount;
    const newAmount2 = sourceAmount;
    const newCurrency1 = targetCurrency;
    const newCurrency2 = sourceCurrency;

    setSourceAmount(newAmount1);
    setTargetAmount(newAmount2);
    setSourceCurrency(newCurrency1);
    setTargetCurrency(newCurrency2);
  };

  return (
    <div className={styles.app}>
      <Header rates={rates} />
      <div className={styles.currenciesWrapper}>
        <CurrencyInput
          key="1"
          type="I HAVE"
          rates={rates}
          currency={sourceCurrency}
          amount={sourceAmount}
          onAmountChange={handleSourceAmountChange}
          onCurrencyChange={handleSourceCurrencyChange}
        />
        <div className={styles.iconWrapper} onClick={handleSwitchClick}>
          <ArrowsIcon />
        </div>
        <CurrencyInput
          key="2"
          type="I'LL GET"
          rates={rates}
          currency={targetCurrency}
          amount={targetAmount}
          onAmountChange={handleTargetAmountChange}
          onCurrencyChange={handleTargetCurrencyChange}
        />
      </div>
    </div>
  );
}

export default App;
