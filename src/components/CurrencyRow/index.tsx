import { formatCurrency } from 'utils/currency';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import * as Styled from './styles';

export type CurrencyRowProps = {
  rentalValue?: number;
  purchaseValue?: number;
};

export const CurrencyRow = ({
  rentalValue,
  purchaseValue,
}: CurrencyRowProps) => {
  return (
    <Styled.Wrapper>
      {!purchaseValue && !rentalValue && (
        <Styled.Label>Sem Valores</Styled.Label>
      )}
      {purchaseValue && (
        <Styled.Label title="Valor de compra">
          <AddBusinessIcon />
          {formatCurrency(purchaseValue)}
        </Styled.Label>
      )}
      {rentalValue && (
        <Styled.Label title="Valor de aluguel">
          <AttachMoneyIcon />
          {formatCurrency(rentalValue)}
        </Styled.Label>
      )}
    </Styled.Wrapper>
  );
};
