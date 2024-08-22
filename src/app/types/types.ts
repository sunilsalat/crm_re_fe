import {
  CONFIRM_PASSWORD,
  EMAIL,
  FIRST_NAME,
  LAST_NAME,
  PASSWORD,
  PHONE,
} from '@/constant/auth';

export type AddLeadsFormData = {
  lead_type?: 'Hot' | 'Cold';

  name: string;
  phone: number;
  email: string;
  address:string;
  project:string;
  requirement: string;
  source:string;
  budget:string;
};

export type LoginFormData = {
  [EMAIL]: string;
  [PASSWORD]: string;
};

export type RegisterFormData = {
  [FIRST_NAME]: string;
  [LAST_NAME]: string;
  [EMAIL]: string;
  [PHONE]: string;
  [PASSWORD]: string;
  [CONFIRM_PASSWORD]: string;
};
