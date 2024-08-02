import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./Summary.styles";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  // Create a function to calculate the total amount of income and outcome

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
    })


  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{summary.income}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{summary.outcome}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{summary.total}</strong>
      </SummaryCard>
    </SummaryContainer >
  )
}