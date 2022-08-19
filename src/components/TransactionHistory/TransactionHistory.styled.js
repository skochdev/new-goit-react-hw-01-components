import styled from 'styled-components/macro';

export const Table = styled.table`
  width: ${p => p.theme.sizes[600]};
`;

export const TableHead = styled.thead`
  display: block;

  tr {
    display: flex;
    justify-content: space-evenly;
  }

  th {
    width: 100%;
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primary};
    padding: ${p => p.theme.space[3]}px;
  }
`;

export const TableBody = styled.tbody`
  display: block;

  tr {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    text-align: center;
    gap: ${p => p.theme.space[1]}px;
    background-color: ${p => p.theme.colors.muted};

    td {
      padding: ${p => p.theme.space[2]}px;
      width: 100%;
    }
  }

  tr:nth-child(odd) {
    background-color: ${p => p.theme.colors.white};
  }
`;
