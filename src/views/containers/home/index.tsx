import React, { ReactElement } from 'react';
import { Box, Typography, Divider } from '@material-ui/core';
import styled from 'styled-components';

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 6px;
  max-height: 550px;
`;

const Home = (): ReactElement => {
  return (
    <Box
      pt="1em"
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      justifyContent="center"
      width={1}
    >
      <Box>
        <Typography color="textPrimary" variant="h3" component="h1">
          Home Page
        </Typography>
      </Box>
      <Box mt="1.5em">
        <Image src={'https://wallpapercave.com/wp/wp4884171.jpg'} />
      </Box>
    </Box>
  );
};

export default Home;
