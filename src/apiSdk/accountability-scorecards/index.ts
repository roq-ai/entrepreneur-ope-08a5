import queryString from 'query-string';
import {
  AccountabilityScorecardInterface,
  AccountabilityScorecardGetQueryInterface,
} from 'interfaces/accountability-scorecard';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAccountabilityScorecards = async (
  query?: AccountabilityScorecardGetQueryInterface,
): Promise<PaginatedInterface<AccountabilityScorecardInterface>> => {
  return fetcher('/api/accountability-scorecards', {}, query);
};

export const createAccountabilityScorecard = async (accountabilityScorecard: AccountabilityScorecardInterface) => {
  return fetcher('/api/accountability-scorecards', { method: 'POST', body: JSON.stringify(accountabilityScorecard) });
};

export const updateAccountabilityScorecardById = async (
  id: string,
  accountabilityScorecard: AccountabilityScorecardInterface,
) => {
  return fetcher(`/api/accountability-scorecards/${id}`, {
    method: 'PUT',
    body: JSON.stringify(accountabilityScorecard),
  });
};

export const getAccountabilityScorecardById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/accountability-scorecards/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteAccountabilityScorecardById = async (id: string) => {
  return fetcher(`/api/accountability-scorecards/${id}`, { method: 'DELETE' });
};
