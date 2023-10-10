import queryString from 'query-string';
import { UserPerformanceInterface, UserPerformanceGetQueryInterface } from 'interfaces/user-performance';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUserPerformances = async (
  query?: UserPerformanceGetQueryInterface,
): Promise<PaginatedInterface<UserPerformanceInterface>> => {
  return fetcher('/api/user-performances', {}, query);
};

export const createUserPerformance = async (userPerformance: UserPerformanceInterface) => {
  return fetcher('/api/user-performances', { method: 'POST', body: JSON.stringify(userPerformance) });
};

export const updateUserPerformanceById = async (id: string, userPerformance: UserPerformanceInterface) => {
  return fetcher(`/api/user-performances/${id}`, { method: 'PUT', body: JSON.stringify(userPerformance) });
};

export const getUserPerformanceById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/user-performances/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteUserPerformanceById = async (id: string) => {
  return fetcher(`/api/user-performances/${id}`, { method: 'DELETE' });
};
