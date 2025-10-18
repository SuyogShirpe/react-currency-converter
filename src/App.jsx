import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Input from "./components/InputBox";
import useCurrencyInfo from "./custom_hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () => {
    const newFrom = to;
    const newTo = from;
    const newAmount = convertedAmount;
    const newConvertedAmount = amount;

    setFrom(newFrom);
    setTo(newTo);
    setConvertedAmount(newConvertedAmount);
    setAmount(newAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="bg-light bg-opacity-25 backdrop-blur-lg rounded-4 p-4 shadow-lg">
          <div className="text-center  mb-4  py-2">
            <h2>Currency Converter</h2>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div>
              <Input
                label="From"
                amount={amount}
                currencyOptions={currencyOptions}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="text-center my-3">
              <button
                type="button"
                className="btn bg-primary rounded-pill px-4"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div>
              <Input
                label="To"
                amount={convertedAmount}
                currencyOptions={currencyOptions}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisabled={true}
              />
            </div>
            <button
              type="submit"
              className="btn bg-success w-100 py-2 mt-3 fw-semibold rounded-pill"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
