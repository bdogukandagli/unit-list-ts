import React from 'react';
import { Box, Typography, Link, Divider } from '@material-ui/core';

const Header = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        px="4em"
      >
        <Box>
          <Typography variant="h6" color="textSecondary">
            Logo
          </Typography>
        </Box>
        <Box display="flex">
          <Box>
            <Typography variant="h6">
              <Link href="/" color="primary">
                Home
              </Link>
            </Typography>
          </Box>
          <Box pl="2em">
            <Typography variant="h6">
              <Link href="/units" color="primary">
                Units
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box py="0.5em">
        <Divider />
      </Box>
    </>
  );
};

export default Header;
