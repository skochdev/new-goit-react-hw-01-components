import styled from 'styled-components/macro';

export const StyledStatistics = styled.div`
  width: ${p => p.theme.sizes[600]};
  margin: 0 auto;
`;

export const StyledTitle = styled.h2`
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.xl};
  text-transform: uppercase;
  text-align: center;
`;

export const StyledList = styled.ul`
  display: flex;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l};
  border: ${p => p.theme.borders[1]};
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 20%;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l};
  padding: ${p => p.theme.space[2]}px;
  text-align: center;

  span {
    display: block;
  }

  span:first-child {
    font-size: ${p => p.theme.fontSizes.xs};
    margin-bottom: ${p => p.theme.space[2]}px;
  }

  span:last-child {
    font-weight: ${p => p.theme.fontWeights[3]};
  }

  & + & {
    border-left: ${p => p.theme.borders[1]};
  }
`;
