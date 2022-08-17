import { Box } from '../Box';
import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileDescription,
  ProfileAvatar,
  ProfileStats,
  ProfileName,
  ProfileStatsItem,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box bg="background" p={5}>
      <ProfileCard>
        <ProfileAvatar src={avatar} alt="User avatar" />

        <ProfileDescription>
          <ProfileName>{username}</ProfileName>
          <p>@{tag}</p>
          <p>{location}</p>
        </ProfileDescription>

        <ProfileStats>
          {Object.entries(stats).map(stat => {
            const [name, value] = stat;
            return (
              <ProfileStatsItem key={name}>
                <span>{name}</span>
                <span>{value}</span>
              </ProfileStatsItem>
            );
          })}
        </ProfileStats>
      </ProfileCard>
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
