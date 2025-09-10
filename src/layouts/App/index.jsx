import React from 'react';
  import { useIntl } from 'react-intl';

export const App = () => {
  const { formatMessage } = useIntl();
  return (
    <div>
      {formatMessage({ id: 'HELLO' })}
      hello
    </div>
  );
}
