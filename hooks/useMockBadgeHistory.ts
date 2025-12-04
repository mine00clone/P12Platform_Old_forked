import { useQuery } from '@tanstack/react-query';
import { Address } from 'wagmi';
import { MOCK_BRIDGE_TXS } from '@/constants/mockBridgeHistory';
import { HistoryResult, BridgeTxs } from './bridge';

type PageInfo = {
  hasNextPage: boolean;
  endCursor: string | null;
};

export type MockHistoryResult = HistoryResult & {
  pageInfo: PageInfo;
};

const DEFAULT_PAGE_SIZE = 5;

const paginate = (first?: number, after?: string | null) => {
  const pageSize = first ?? DEFAULT_PAGE_SIZE;
  const startIndex = after ? Number(after) + 1 : 0;
  const items = MOCK_BRIDGE_TXS.slice(startIndex, startIndex + pageSize) as BridgeTxs[];
  const endIndex = startIndex + items.length - 1;
  const hasNextPage = startIndex + pageSize < MOCK_BRIDGE_TXS.length;
  const endCursor = items.length === 0 ? null : String(endIndex);

  return {
    bridgeTxs: items,
    pageInfo: { hasNextPage, endCursor },
  } satisfies { bridgeTxs: BridgeTxs[]; pageInfo: PageInfo };
};

export const useMockBadgeHistory = (address?: Address, options?: { first?: number; after?: string | null }) => {
  const queryKey =
    options?.first == null && options?.after == null
      ? ['mock_fetch_badge_history', address]
      : ['mock_fetch_badge_history', address, options.first, options.after];

  return useQuery<MockHistoryResult>(
    queryKey,
    async () => {
      if (!address) {
        return {
          user: { bridgeTxs: [] },
          pageInfo: { hasNextPage: false, endCursor: null },
        };
      }

      const { bridgeTxs, pageInfo } = paginate(options?.first, options?.after);

      return {
        user: { bridgeTxs },
        pageInfo,
      };
    },
    {
      enabled: true,
    },
  );
};
