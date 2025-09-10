import React from 'react';
import { SmartIntl } from './providers/SmartIntl';
import { SmartQuery } from './providers/SmartQuery';

export const AppWrapper = ({ children }) => {
  return (
    <SmartIntl>
      <SmartQuery>
        {children}
      </SmartQuery>
    </SmartIntl>
  )
}