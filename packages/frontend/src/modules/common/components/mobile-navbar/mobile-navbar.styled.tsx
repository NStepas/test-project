import { AppBar } from '@mui/material';

import styled from 'styled-components';
import { COLORS } from '../../../theme';

export const MobileNavBarWrapper = styled(AppBar)`
  background-color: ${COLORS.navbar};
  justify-content: unset;
  div {
    min-height: 0;
    display: flex;
  }
  svg {
    color: ${COLORS.white};
  }
`;
