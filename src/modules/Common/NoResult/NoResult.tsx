import React, { ReactElement } from 'react';
// local imports
import noResult from '../../../assets/images/no-result.gif'

const NoResult = (): ReactElement => {
  return (
    <img alt="loading..."
      src={noResult} />
  )
}

export default NoResult
