import React from 'react';
import { IntlProvider } from 'react-intl';

export const SmartIntl = ({ children }) => {
  return (
    <IntlProvider local="en" messages={{ HELLO: 'hello2' }}>
      {children}
    </IntlProvider>
  )
}