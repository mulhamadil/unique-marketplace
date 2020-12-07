// Copyright 2017-2020 @polkadot/apps-routing authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';

import Component from '@polkadot/app-bounties';

import type { Route } from './types';

export default function create (t: TFunction): Route {
  return {
    Component,
    display: {
      needsApi: [
        'tx.treasury.proposeBounty'
      ]
    },
    group: 'governance',
    icon: 'coins',
    name: 'bounties',
    text: t('nav.bounties', 'Bounties', { ns: 'apps-routing' })
  };
}
