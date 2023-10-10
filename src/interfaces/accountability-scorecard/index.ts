import { GetQueryInterface } from 'interfaces';

export interface AccountabilityScorecardInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface AccountabilityScorecardGetQueryInterface extends GetQueryInterface {
  id?: string;
}
