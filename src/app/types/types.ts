import {
  CONFIRM_PASSWORD,
  EMAIL,
  FIRST_NAME,
  LAST_NAME,
  PASSWORD,
  PHONE,
} from '@/constant/auth';

export type AddLeadsFormData = {
  lead_type: 'Hot' | 'Cold';
  title: 'Mr.' | 'Ms.' | 'Miss.';
  first_name: string;
  last_name: string;
  contact_number: number;
  email_id: string;
  requirement: string;
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
