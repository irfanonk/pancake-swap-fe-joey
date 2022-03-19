import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'KryoSwap',
  description:
    'First Swap With A Fiat On-Ramp. Vetted, Audited Projects Only. Ran on BSC.',
  image: 'https://kryoswap.com/img/logo.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('KryoSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('KryoSwapp')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('KryoSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('KryoSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('KryoSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('KryoSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('KryoSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('KryoSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('KryoSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('KryoSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('KryoSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('KryoSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('KryoSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('KryoSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('KryoSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('KryoSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('KryoSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('KryoSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('KryoSwap Info & Analytics')}`,
        description: 'View statistics for KryoSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('KryoSwap Info & Analytics')}`,
        description: 'View statistics for KryoSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('KryoSwap Info & Analytics')}`,
        description: 'View statistics for KryoSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('KryoSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('KryoSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('KryoSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('KryoSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('KryoSwap')}`,
      }
    default:
      return null
  }
}
