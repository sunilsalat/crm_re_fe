import {
  CONFIRM_PASSWORD,
  EMAIL,
  FIRST_NAME,
  LAST_NAME,
  PASSWORD,
  PHONE,
} from '@/constant/auth';

export const authValidators = {
  [EMAIL]: {
    required: 'Please Enter Email',
  },
  [PASSWORD]: {
    required: 'Please Enter Password',
  },
  [FIRST_NAME]: {
    required: 'Please Enter Firstname',
  },
  [LAST_NAME]: {
    required: 'Please Enter Lastname',
  },
  [PHONE]: {
    required: 'Please Enter Phone',
  },
  [CONFIRM_PASSWORD]: {
    required: 'Please Enter Confirm Password',
  },
};
