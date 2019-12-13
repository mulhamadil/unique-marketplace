// Copyright 2017-2019 @polkadot/app-democracy authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { I18nProps as Props } from '@polkadot/react-components/types';

import React from 'react';
import styled from 'styled-components';
import { Button } from '@polkadot/react-components';
import { useToggle } from '@polkadot/react-hooks';

import translate from '../translate';
import DispatchQueue from './DispatchQueue';
import Externals from './Externals';
import Proposals from './Proposals';
import Referendums from './Referendums';
import Summary from './Summary';
import PreImage from './PreImage';
import Propose from './Propose';

function Overview ({ className, t }: Props): React.ReactElement {
  const [isPreimageOpen, togglePreimage] = useToggle();
  const [isProposeOpen, togglePropose] = useToggle();

  return (
    <div className={className}>
      <Summary />
      <Button.Group>
        <Button
          icon='add'
          isPrimary
          label={t('Submit preimage')}
          onClick={togglePreimage}
        />
        <Button.Or />
        <Button
          icon='add'
          isPrimary
          label={t('Submit proposal')}
          onClick={togglePropose}
        />
      </Button.Group>
      {isPreimageOpen && (
        <PreImage onClose={togglePreimage} />
      )}
      {isProposeOpen && (
        <Propose onClose={togglePropose} />
      )}
      <Referendums />
      <Proposals />
      <Externals />
      <DispatchQueue />
    </div>
  );
}

export default translate(
  styled(Overview)`
    .proposalSection {
      margin-bottom: 1.5rem;
    }
  `
);
