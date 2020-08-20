import React from 'react';
import { Divider as ChakraDivider, Grid } from '@chakra-ui/core';

// import { Container } from './styles';

const Divider: React.FC = () => {
  return (
    <Grid
      columnGap={12}
      gridTemplateColumns="1fr 1fr"
      opacity={0.4}
    >
      <ChakraDivider marginY={6} />
      <ChakraDivider marginY={6} />
    </Grid>
  );
}

export default Divider;