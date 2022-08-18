import {
  StyledStatistics,
  StyledTitle,
  StyledList,
  StyledListItem,
} from './Statistics.styled';
import PropTypes from 'prop-types';
import { getRandomHexColor } from '../../functions/getRandomHexColor';
import { Box } from '../Box';

export const Statistics = ({ title = null, stats }) => {
  return (
    <>
      <StyledStatistics>
        {title && <StyledTitle>{title}</StyledTitle>}
        <StyledList>
          {stats.map(({ label, percentage, id }) => (
            <StyledListItem key={id}>
              <Box bg="white">
                <Box as="span">{label}</Box>
                <Box as="span" color={getRandomHexColor()}>
                  {percentage}%
                </Box>
              </Box>
            </StyledListItem>
          ))}
        </StyledList>
      </StyledStatistics>
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
