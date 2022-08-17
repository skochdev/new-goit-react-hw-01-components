import styled from 'styled-components';

export const ProfileCard = styled.div`
  background-color: ${p => p.theme.colors.white};
  padding-top: ${p => p.theme.space[4]}px;
  box-shadow: ${p => p.theme.shadows.sm};
  max-width: ${p => p.theme.sizes[300]};
  color: ${p => p.theme.colors.text};
  border-radius: ${p => p.theme.radii.normal};
  margin: 0 auto;
  overflow: hidden;
`;

export const ProfileDescription = styled.div`
  color: ${p => p.theme.colors.textAlt};
  text-align: center;
  margin-top: ${p => p.theme.space[4]}px;

  & p {
    margin-bottom: 0;
  }
`;

export const ProfileName = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights[3]};
  margin: 0;
`;

export const ProfileAvatar = styled.img`
  display: block;
  margin: 0 auto;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.white};
  width: ${p => p.theme.sizes[100]};
  height: ${p => p.theme.sizes[100]};
`;

export const ProfileStats = styled.ul`
  display: flex;
  padding: 0;
  background-color: ${p => p.theme.colors.accent};
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: 0;
  justify-content: space-evenly;
  text-align: center;
  list-style: none;

  li + li {
    border-left: ${p => p.theme.borders[1]};
    border-color: ${p => p.theme.colors.white};
  }
`;

export const ProfileStatsItem = styled.li`
  display: flex;
  flex-basis: 33.3333%;
  flex-flow: column nowrap;

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights[0]};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;

  span:last-child {
    font-weight: ${p => p.theme.fontWeights[3]};
    margin-top: ${p => p.theme.space[3]}px;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
