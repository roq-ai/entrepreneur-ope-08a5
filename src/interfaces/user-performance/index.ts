import { GetQueryInterface } from 'interfaces';

export interface UserPerformanceInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface UserPerformanceGetQueryInterface extends GetQueryInterface {
  id?: string;
}
