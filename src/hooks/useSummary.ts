import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

export function useSummary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (accumulator, currentValue) => {
      if (currentValue.type === 'income') {
        accumulator.income += currentValue.price
        accumulator.total += currentValue.price
      } else {
        accumulator.outcome += currentValue.price
        accumulator.total -= currentValue.price
      }

      return accumulator
    },
    {
      income: 0,
      outcome: 0,
      total: 0
    }
  )

  return summary;
}

