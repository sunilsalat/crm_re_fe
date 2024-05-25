'use server';

import { commonFetch } from '@/api/fetch';
import { loginUrl, registerUrl } from '@/config/config';
// import { setToastError, setToastSucess } from '@/lib/utils';
import { redirect } from 'next/navigation';
// import toast from 'react-hot-toast';
import { z } from 'zod';

const registerSchema = z
  .object({
    firstName: z.string().nonempty('First name is required'),
    lastName: z.string().nonempty('Last name is required'),
    email: z.string().email('Invalid email address'),
    phone: z
      .string()
      .nonempty('Phone number is required')
      .regex(/^\d{10}$/, 'Phone number must be 10 digits'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z
      .string()
      .min(6, 'Confirm password must be at least 6 characters long'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export const register = async (prevState: any, formData: FormData) => {
  const firstName = formData.get('firstName')?.toString();
  const lastName = formData.get('lastName')?.toString();
  const email = formData.get('email')?.toString();
  const phone = formData.get('phone')?.toString();
  const password = formData.get('password')?.toString();
  const confirmPassword = formData.get('confirmPassword')?.toString();

  let data = { firstName, lastName, email, phone, password, confirmPassword };

  const validatedFields = registerSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      data,
    };
  }
  delete data.confirmPassword;
  const userData = await commonFetch({
    url: registerUrl,
    payload: data,
  });
  if (userData) {
    // toast.success(userData?.msg);
    // setToastSucess(userData?.msg || 'Register succesfully');
    redirect('/login');
    return {
      ...prevState,
      zodErrors: null,
      data: userData?.data,
      msg: userData?.msg,
    };
  } else {
    // setToastSucess(userData?.msg || 'Register failed');
    // toast.error(userData?.msg);
  }
};

export const login = async (prevState: any, formData: FormData) => {
  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();

  let data = { email, password };

  const validatedFields = loginSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      data,
    };
  }
  const userData = await commonFetch({
    url: loginUrl,
    payload: data,
  });
  if (userData?.data || userData?.msg) {
    // toast.success(userData?.msg);
    console.log('userData', userData);
    // setToastSucess(userData?.msg || 'Login succesfully');
    redirect('/dashboard');
    return {
      ...prevState,
      zodErrors: null,
      data: userData?.data,
      msg: userData?.msg,
    };
  } else {
    console.log('error', userData?.error[0]?.message);
    // setToastError(userData?.msg || 'Login failed');
    // toast.error(userData?.msg);
  }
};
