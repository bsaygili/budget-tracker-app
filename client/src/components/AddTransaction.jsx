import React, { useContext } from "react";
import { useState } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddTransaction() {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const onSubmitForm = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmitForm}>
        <div className="form-control">
          <label htmlFor="text">Explanation</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter short comment..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
