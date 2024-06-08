'use client';
import { RegisterFormData } from '@/app/types/types';
import { CONFIRM_PASSWORD, EMAIL, FIRST_NAME, LAST_NAME, PASSWORD, PHONE } from '@/constant/auth';
import { authValidators } from '@/form-validators/authValidators';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
const Register = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = (data: RegisterFormData) => {
    console.log({ data });
  };

  return (
    <>
      <h2 className="text-center text-2xl font-semibold text-primary">
        Register
      </h2>
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="text-neutral block">First Name</label>
          <input
            type="text"
            {...register(FIRST_NAME, authValidators[FIRST_NAME])}
            className={`w-full border rounded-sm ${getValues(FIRST_NAME) ? 'border-magenta' : 'border-gray-300'} ${errors[FIRST_NAME]?.message ? 'border-red-500' : 'border-gray-300'} `}
            placeholder="Enter your first name"
          />
          {errors[FIRST_NAME]?.message && (
            <span className="mt-2 block text-red-500 ">
              {errors[FIRST_NAME]?.message}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="text-neutral block">Last Name</label>
          <input
            type="text"
            {...register(LAST_NAME, authValidators[LAST_NAME])}
            className={`w-full border rounded-sm ${getValues(LAST_NAME) ? 'border-magenta' : 'border-gray-300'} ${errors[LAST_NAME]?.message ? 'border-red-500' : 'border-gray-300'} `}
            placeholder="Enter your last name"
          />
          {errors[LAST_NAME]?.message && (
            <span className="mt-2 block text-red-500 ">
              {errors[LAST_NAME]?.message}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="text-neutral block">Email</label>
          <input
            type="email"
            {...register(EMAIL, authValidators[EMAIL])}
            className={`w-full border rounded-sm ${getValues(EMAIL) ? 'border-magenta' : 'border-gray-300'} ${errors[EMAIL]?.message ? 'border-red-500' : 'border-gray-300'} `}
            placeholder="Enter your email"
          />
          {errors[EMAIL]?.message && (
            <span className="mt-2 block text-red-500 ">
              {errors[EMAIL]?.message}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="text-neutral block">Phone</label>
          <input
            type="text"
            {...register(PHONE, authValidators[PHONE])}
            className={`w-full border rounded-sm ${getValues(PHONE) ? 'border-magenta' : 'border-gray-300'} ${errors[PHONE]?.message ? 'border-red-500' : 'border-gray-300'} `}
            placeholder="Enter your phone number"
          />
          {errors[PHONE]?.message && (
            <span className="mt-2 block text-red-500 ">
              {errors[PHONE]?.message}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="text-neutral block">Password</label>
          <input
            type="password"
            {...register(PASSWORD, authValidators[PASSWORD])}
            name="password"
            className={`w-full border rounded-sm ${getValues(PASSWORD) ? 'border-magenta' : 'border-gray-300'} ${errors[PASSWORD]?.message ? 'border-red-500' : 'border-gray-300'} `}
            placeholder="Enter your password"
          />
          {errors[PASSWORD]?.message && (
            <span className="mt-2 block text-red-500 ">
              {errors[PASSWORD]?.message}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="text-neutral block">Confirm Password</label>
          <input
            type="password"
            {...register(CONFIRM_PASSWORD, authValidators[CONFIRM_PASSWORD])}
            name="confirmPassword"
            className={`w-full border rounded-sm ${getValues(CONFIRM_PASSWORD) ? 'border-magenta' : 'border-gray-300'} ${errors[CONFIRM_PASSWORD]?.message ? 'border-red-500' : 'border-gray-300'} `}
            placeholder="Enter your password"
          />
          {errors[CONFIRM_PASSWORD]?.message && (
            <span className="mt-2 block text-red-500 ">
              {errors[CONFIRM_PASSWORD]?.message}
            </span>
          )}
        </div>
        <button className="btn btn-primary w-full" type="submit">
          Register
        </button>
      </form>
      <p className="text-neutral mt-4 text-center">
        Already have an account?{' '}
        <Link href="/login" className="text-primary">
          Login
        </Link>
      </p>
    </>
  );
};

export default Register;
