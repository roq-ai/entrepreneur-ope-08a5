import queryString from 'query-string';
import { RegularMeetingsInterface, RegularMeetingsGetQueryInterface } from 'interfaces/regular-meetings';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getRegularMeetings = async (
  query?: RegularMeetingsGetQueryInterface,
): Promise<PaginatedInterface<RegularMeetingsInterface>> => {
  return fetcher('/api/regular-meetings', {}, query);
};

export const createRegularMeetings = async (regularMeetings: RegularMeetingsInterface) => {
  return fetcher('/api/regular-meetings', { method: 'POST', body: JSON.stringify(regularMeetings) });
};

export const updateRegularMeetingsById = async (id: string, regularMeetings: RegularMeetingsInterface) => {
  return fetcher(`/api/regular-meetings/${id}`, { method: 'PUT', body: JSON.stringify(regularMeetings) });
};

export const getRegularMeetingsById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/regular-meetings/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteRegularMeetingsById = async (id: string) => {
  return fetcher(`/api/regular-meetings/${id}`, { method: 'DELETE' });
};
