import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary/Summary";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { PriceHightlight, TransactionsContainer, TransactionsTable } from "./Transactions.styles";

export function Transactions() {
  return (
    <div>
      <Header />

      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHightlight variant="income">R$ 12.000</PriceHightlight>
              </td>
              <td>Venda</td>
              <td>30/07/2024</td>
            </tr>

            <tr>
              <td>Aluguel</td>
              <td>
                <PriceHightlight variant="outcome">- R$ 1.200</PriceHightlight>
              </td>
              <td>Casa</td>
              <td>01/08/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}