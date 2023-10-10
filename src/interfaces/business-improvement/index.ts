import { GetQueryInterface } from 'interfaces';

export interface BusinessImprovementInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface BusinessImprovementGetQueryInterface extends GetQueryInterface {
  id?: string;
}
