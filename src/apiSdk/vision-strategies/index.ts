import queryString from 'query-string';
import { VisionStrategyInterface, VisionStrategyGetQueryInterface } from 'interfaces/vision-strategy';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getVisionStrategies = async (
  query?: VisionStrategyGetQueryInterface,
): Promise<PaginatedInterface<VisionStrategyInterface>> => {
  return fetcher('/api/vision-strategies', {}, query);
};

export const createVisionStrategy = async (visionStrategy: VisionStrategyInterface) => {
  return fetcher('/api/vision-strategies', { method: 'POST', body: JSON.stringify(visionStrategy) });
};

export const updateVisionStrategyById = async (id: string, visionStrategy: VisionStrategyInterface) => {
  return fetcher(`/api/vision-strategies/${id}`, { method: 'PUT', body: JSON.stringify(visionStrategy) });
};

export const getVisionStrategyById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/vision-strategies/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteVisionStrategyById = async (id: string) => {
  return fetcher(`/api/vision-strategies/${id}`, { method: 'DELETE' });
};
