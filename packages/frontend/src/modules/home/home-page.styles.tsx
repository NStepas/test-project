import styled from 'styled-components';

import { Grid } from '@mui/material';
import { Container } from '@mui/system';

export const HomeGridWrapper = styled(Grid)`
  margin-top: 1.5rem;
  padding: 0;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const MainContainer = styled(Container)`
  min-height: 100vh;
  height: fit-content;
  @media (max-width: 600px) {
    padding: 0rem;
  }
  @media (min-width: 600px) {
    padding: 0rem;
  }
  @media (min-width: 1200px) {
    max-width: 1500px;
  }
`;
