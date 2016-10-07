import { actions as accessToken } from 'features/accessTokens'
import { actions as account } from 'features/accounts'
import { actions as app } from 'features/app'
import { actions as asset } from 'features/assets'
import { actions as balance } from 'features/balances'
import { actions as configuration } from 'features/configuration'
import { actions as core } from 'features/core'
import { actions as mockhsm } from 'features/mockhsm'
import { actions as transaction } from 'features/transactions'
import { actions as unspent } from 'features/unspents'
import routing from './routing'

const actions = {
  ...accessToken,
  account,
  app,
  asset,
  balance,
  configuration,
  core,
  mockhsm,
  routing,
  transaction,
  unspent,
}

export default actions
