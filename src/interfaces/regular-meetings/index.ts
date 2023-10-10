import { GetQueryInterface } from 'interfaces';

export interface RegularMeetingsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface RegularMeetingsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
