import styled from 'styled-components/macro';

export const FriendList = styled.ul`
  background-color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.space[4]}px;
  min-width: ${p => p.theme.sizes[400]};
  border-radius: ${p => p.theme.radii.normal};
`;
