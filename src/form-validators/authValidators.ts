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
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,16}$/,
      message:
        'Password must be 6-16 characters long, 1 uppercase , 1 lowercase character, 1 number & 1 special character',
    },
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
    validate: {
      matchesPassword: (value: string, formValues: any) => {
        const password = formValues[PASSWORD];
        if (password !== value) {
          return 'Password and confirm password should same';
        }
        return true;
      },
    },
  },
};
