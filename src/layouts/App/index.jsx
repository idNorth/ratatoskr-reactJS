import React from 'react';
import { useIntl } from 'react-intl';

// styles
import { Box } from './styles';

export const App = () => {
  const { formatMessage } = useIntl();
  return (
    <Box>
      {formatMessage({ id: 'HELLO' })}
      hello
    </Box>
  );
}
