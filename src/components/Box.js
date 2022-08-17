import styled from 'styled-components';
import {
  color,
  layout,
  typography,
  flexbox,
  position,
  space,
  shadow,
} from 'styled-system';

// This is a default reusable box

export const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  color,
  layout,
  typography,
  flexbox,
  space,
  position,
  shadow
);
