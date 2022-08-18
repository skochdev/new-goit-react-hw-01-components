import styled from 'styled-components/macro';

export const Table = styled.table`
  width: ${p => p.theme.sizes[600]};
`;

export const TableHead = styled.thead`
  display: flex;
  width: 100%;
  background-color: ${p => p.theme.colors.background};
  padding: ${p => p.theme.space[2]}px;

  tr {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;

export const TableBody = styled.tbody`
  tr {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    text-align: center;
    column-gap: ${p => p.theme.space[2]}px;

    td {
      padding: ${p => p.theme.space[2]}px;
      background-color: tomato;
      width: 100%;
    }
  }
`;
