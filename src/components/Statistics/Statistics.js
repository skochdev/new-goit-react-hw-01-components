import * as S from './Statistics.styled';
import PropTypes from 'prop-types';
import { getRandomHexColor } from '../../functions/getRandomHexColor';
import { Box } from '../Box';

export const Statistics = ({ title = null, stats }) => {
  return (
    <>
      <S.Statistics>
        {title && <S.Title>{title}</S.Title>}
        <S.List>
          {stats.map(({ label, percentage, id }) => (
            <S.ListItem key={id}>
              <Box bg="white">
                <Box as="span">{label}</Box>
                <Box as="span" color={getRandomHexColor()}>
                  {percentage}%
                </Box>
              </Box>
            </S.ListItem>
          ))}
        </S.List>
      </S.Statistics>
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
