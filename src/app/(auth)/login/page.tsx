'use client';
import { LoginFormData } from '@/app/types/types';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { EMAIL, PASSWORD } from '@/constant/auth';
import { authValidators } from '@/form-validators/authValidators';

const Login = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log({ data });
  };

  return (
    <>
      <h2 className="text-center text-2xl font-semibold text-primary">Login</h2>
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
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
          <label className="text-neutral block">Password</label>
          <input
            type="password"
            {...register(PASSWORD, authValidators[PASSWORD])}
            className={`w-full border rounded-sm ${getValues(PASSWORD) ? 'border-magenta' : 'border-gray-300'} ${errors[PASSWORD]?.message ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter your password"
          />
          {errors[PASSWORD]?.message && (
            <span className="mt-2 block text-red-500 ">
              {errors[PASSWORD]?.message}
            </span>
          )}
        </div>
        <button className="btn btn-primary w-full" type="submit">
          Login
        </button>
      </form>
      <p className="text-neutral mt-4 text-center">
        {"Don't have an account?"}{' '}
        <Link href="/register" className="text-primary">
          Register
        </Link>
      </p>
    </>
  );
};

export default Login;
