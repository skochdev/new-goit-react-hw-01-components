import * as S from './TransactionHistory.styled';
import { Box } from '../Box';
import { TableBody, TableHead } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Box p={4} display="flex" justifyContent="center">
      <S.Table>
        <S.TableHead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </S.TableHead>

        <S.TableBody>
          {transactions.map(({ type, amount, currency, id }) => (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </S.TableBody>
      </S.Table>
    </Box>
  );
};
