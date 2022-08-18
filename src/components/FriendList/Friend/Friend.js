import PropTypes from 'prop-types';
import * as S from './Friend.styled';

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <S.Friend>
      <S.Status isOnline={isOnline}>{isOnline}</S.Status>
      <S.Avatar src={avatar} alt={name} width="48" />
      <S.Name>{name}</S.Name>
    </S.Friend>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
