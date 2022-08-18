import * as S from './FriendList.styled';
import PropTypes from 'prop-types';
import { Friend } from './Friend/Friend';
import { Box } from '../Box';

export const FriendList = ({ friends }) => {
  return (
    <Box
      bg="background"
      pt={4}
      pb={4}
      mt={4}
      display="flex"
      justifyContent="center">
      <S.FriendList>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <Friend key={id} name={name} avatar={avatar} isOnline={isOnline} />
        ))}
      </S.FriendList>
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
