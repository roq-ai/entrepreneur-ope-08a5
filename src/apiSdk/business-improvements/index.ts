import queryString from 'query-string';
import { BusinessImprovementInterface, BusinessImprovementGetQueryInterface } from 'interfaces/business-improvement';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBusinessImprovements = async (
  query?: BusinessImprovementGetQueryInterface,
): Promise<PaginatedInterface<BusinessImprovementInterface>> => {
  return fetcher('/api/business-improvements', {}, query);
};

export const createBusinessImprovement = async (businessImprovement: BusinessImprovementInterface) => {
  return fetcher('/api/business-improvements', { method: 'POST', body: JSON.stringify(businessImprovement) });
};

export const updateBusinessImprovementById = async (id: string, businessImprovement: BusinessImprovementInterface) => {
  return fetcher(`/api/business-improvements/${id}`, { method: 'PUT', body: JSON.stringify(businessImprovement) });
};

export const getBusinessImprovementById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/business-improvements/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteBusinessImprovementById = async (id: string) => {
  return fetcher(`/api/business-improvements/${id}`, { method: 'DELETE' });
};
