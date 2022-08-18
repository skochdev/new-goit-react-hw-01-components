import styled from 'styled-components/macro';

export const Friend = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.space[4]}px;

  background-color: ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.normal};

  & + & {
    margin-top: ${p => p.theme.space[2]}px;
  }
`;

export const Status = styled.span`
  background-color: ${p =>
    p.isOnline ? p.theme.colors.online : p.theme.colors.offline};
  width: 20px;
  height: 20px;
  border-radius: ${p => p.theme.radii.round};
  margin-right: ${p => p.theme.space[4]}px;
`;

export const Avatar = styled.img`
  margin-right: 2rem;
`;

export const Name = styled.p`
  margin-right: auto;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights[3]};
  color: ${p => p.theme.colors.text};
  margin-top: 0;
  margin-bottom: 0;
`;
