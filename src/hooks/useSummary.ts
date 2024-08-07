import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../contexts/TransactionsContext";
import { useMemo } from "react";

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  }
  );

  const summary = useMemo(() => {
    return transactions.reduce(
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
  }, [transactions])

  return summary;
}

