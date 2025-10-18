import React from "react";
import countryList from "../utils/codes.js"

function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
}) {

  const countryCode = countryList[selectCurrency.toUpperCase()];
  
  return (
    <div className="mb-3">
      <div className="mb-3 d-flex justify-content-between align-items-center ">
        <label className="form-label fw-semibold">{label}</label>
        <img
          key={selectCurrency}
          className="img-fluid rounded shadow-sm border p-1"
          src={`https://flagsapi.com/${countryCode}/flat/64.png`}
          alt={`${selectCurrency}`}
          style={{width:"40px" , height:"40px" }}
        />
      </div>
      <div className="d-flex justify-content-between align-items-center bg-white rounded-3 p-3 shadow-sm">
        <input
          type="number"
          className="form-control border-0 me-2"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisabled}
        />

        <select
          className="form-select w-auto border-0 bg-body-secondary rounded-3"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
