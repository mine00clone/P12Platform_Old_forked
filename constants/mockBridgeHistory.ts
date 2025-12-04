import { GalxeBadge } from './bages';
import { BridgeTxs } from '@/hooks/bridge';

const MOCK_BASE_TS = 4867574400; // 2125-01-01 00:00:00 UTC

const baseBadge = {
  contractAddress: '0x1111111111111111111111111111111111111111',
  galxeCampaign: {
    cid: 1,
    stringId: 'GC6YGUUpaT',
    name: 'MOCK P12 Discord Game',
    rarity: 'Common',
    campaignType: 'Community',
  },
} as const;

const badgeVariants: GalxeBadge[] = [
  {
    ...baseBadge,
    chainId: 137,
    image: 'https://cdn1.p12.games/airdrop/badge/cbadges/GC6YGUUpaT.png',
    tokenId: 1,
  },
  {
    ...baseBadge,
    chainId: 137,
    galxeCampaign: {
      cid: 2,
      stringId: 'GC8tsUUnhC',
      name: 'MOCK Best Supporter White',
      rarity: 'Common',
      campaignType: 'Community',
    },
    image: 'https://cdn1.p12.games/airdrop/badge/cbadges/GC8tsUUnhC.png',
    tokenId: 2,
  },
  {
    ...baseBadge,
    chainId: 56,
    galxeCampaign: {
      cid: 3,
      stringId: 'GCohBUjYYY',
      name: 'MOCK Twitter Giveaway',
      rarity: 'Uncommon',
      campaignType: 'Community',
    },
    image: 'https://cdn1.p12.games/airdrop/badge/cbadges/GCohBUjYYY.png',
    tokenId: 3,
  },
  {
    ...baseBadge,
    chainId: 56,
    galxeCampaign: {
      cid: 4,
      stringId: 'GCj44UtwmA',
      name: 'MOCK Landing Site',
      rarity: 'Common',
      campaignType: 'Community',
    },
    image: 'https://cdn1.p12.games/airdrop/badge/cbadges/GCj44UtwmA.png',
    tokenId: 4,
  },
];

export const MOCK_BRIDGE_TXS: BridgeTxs[] = [
  {
    chainId: '137',
    hash: '0xaaa1111111111111111111111111111111111111111111111111111111111111',
    timestamp: MOCK_BASE_TS - 3600 * 1,
    galxeBadges: [badgeVariants[0]],
  },
  {
    chainId: '137',
    hash: '0xbbb2222222222222222222222222222222222222222222222222222222222222',
    timestamp: MOCK_BASE_TS - 3600 * 2,
    galxeBadges: [badgeVariants[1], badgeVariants[1]],
  },
  {
    chainId: '56',
    hash: '0xccc3333333333333333333333333333333333333333333333333333333333333',
    timestamp: MOCK_BASE_TS - 3600 * 3,
    galxeBadges: [badgeVariants[2]],
  },
  {
    chainId: '56',
    hash: '0xddd4444444444444444444444444444444444444444444444444444444444444',
    timestamp: MOCK_BASE_TS - 3600 * 4,
    galxeBadges: [badgeVariants[3], badgeVariants[2]],
  },
  {
    chainId: '137',
    hash: '0xeee5555555555555555555555555555555555555555555555555555555555555',
    timestamp: MOCK_BASE_TS - 3600 * 5,
    galxeBadges: [badgeVariants[0], badgeVariants[0], badgeVariants[1]],
  },
  {
    chainId: '137',
    hash: '0xfff6666666666666666666666666666666666666666666666666666666666666',
    timestamp: MOCK_BASE_TS - 3600 * 6,
    galxeBadges: [badgeVariants[1]],
  },
  {
    chainId: '56',
    hash: '0x1117777777777777777777777777777777777777777777777777777777777777',
    timestamp: MOCK_BASE_TS - 3600 * 7,
    galxeBadges: [badgeVariants[2], badgeVariants[3]],
  },
  {
    chainId: '137',
    hash: '0x2228888888888888888888888888888888888888888888888888888888888888',
    timestamp: MOCK_BASE_TS - 3600 * 8,
    galxeBadges: [badgeVariants[0]],
  },
  {
    chainId: '56',
    hash: '0x3339999999999999999999999999999999999999999999999999999999999999',
    timestamp: MOCK_BASE_TS - 3600 * 9,
    galxeBadges: [badgeVariants[2]],
  },
  {
    chainId: '137',
    hash: '0x444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    timestamp: MOCK_BASE_TS - 3600 * 10,
    galxeBadges: [badgeVariants[2], badgeVariants[0]],
  },
  {
    chainId: '56',
    hash: '0x555bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    timestamp: MOCK_BASE_TS - 3600 * 11,
    galxeBadges: [badgeVariants[2]],
  },
  {
    chainId: '137',
    hash: '0x666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
    timestamp: MOCK_BASE_TS - 3600 * 12,
    galxeBadges: [badgeVariants[0], badgeVariants[3]],
  },
  {
    chainId: '56',
    hash: '0x777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
    timestamp: MOCK_BASE_TS - 3600 * 13,
    galxeBadges: [badgeVariants[3], badgeVariants[2]],
  },
  {
    chainId: '137',
    hash: '0x888eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    timestamp: MOCK_BASE_TS - 3600 * 14,
    galxeBadges: [badgeVariants[1]],
  },
  {
    chainId: '56',
    hash: '0x999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    timestamp: MOCK_BASE_TS - 3600 * 15,
    galxeBadges: [badgeVariants[2], badgeVariants[0]],
  },
  {
    chainId: '137',
    hash: '0xaaa0000000000000000000000000000000000000000000000000000000000000',
    timestamp: MOCK_BASE_TS - 3600 * 16,
    galxeBadges: [badgeVariants[0]],
  },
  {
    chainId: '56',
    hash: '0xbbb1111111111111111111111111111111111111111111111111111111111111',
    timestamp: MOCK_BASE_TS - 3600 * 17,
    galxeBadges: [badgeVariants[3]],
  },
  {
    chainId: '137',
    hash: '0xccc2222222222222222222222222222222222222222222222222222222222222',
    timestamp: MOCK_BASE_TS - 3600 * 18,
    galxeBadges: [badgeVariants[1], badgeVariants[1]],
  },
  {
    chainId: '56',
    hash: '0xddd3333333333333333333333333333333333333333333333333333333333333',
    timestamp: MOCK_BASE_TS - 3600 * 19,
    galxeBadges: [badgeVariants[2], badgeVariants[2]],
  },
  {
    chainId: '137',
    hash: '0xeee4444444444444444444444444444444444444444444444444444444444444',
    timestamp: MOCK_BASE_TS - 3600 * 20,
    galxeBadges: [badgeVariants[0], badgeVariants[3], badgeVariants[1]],
  },
];
