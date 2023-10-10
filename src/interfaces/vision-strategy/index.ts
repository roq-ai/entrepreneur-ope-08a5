import { GetQueryInterface } from 'interfaces';

export interface VisionStrategyInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface VisionStrategyGetQueryInterface extends GetQueryInterface {
  id?: string;
}
