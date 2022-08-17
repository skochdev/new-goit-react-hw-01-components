import { Box } from '../Box';
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
      <Box as={ProfileCard} bg="white" pt={4} boxShadow="sm">
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
      </Box>
    </Box>
  );
};
