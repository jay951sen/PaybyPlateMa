import React from 'react';

function ExpenseForm() {
  return (
    <form>
      <input type="text" placeholder="Expense name" />
      <input type="number" placeholder="Amount" />
      <button>Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
