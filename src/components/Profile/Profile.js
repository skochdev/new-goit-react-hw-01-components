import { Box } from '../Box';
import PropTypes from 'prop-types';
import * as S from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box bg="background" p={5}>
      <S.ProfileCard>
        <S.ProfileAvatar src={avatar} alt="User avatar" />

        <S.ProfileDescription>
          <S.ProfileName>{username}</S.ProfileName>
          <p>@{tag}</p>
          <p>{location}</p>
        </S.ProfileDescription>

        <S.ProfileStats>
          {Object.entries(stats).map(stat => {
            const [name, value] = stat;
            return (
              <S.ProfileStatsItem key={name}>
                <span>{name}</span>
                <span>{value}</span>
              </S.ProfileStatsItem>
            );
          })}
        </S.ProfileStats>
      </S.ProfileCard>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
