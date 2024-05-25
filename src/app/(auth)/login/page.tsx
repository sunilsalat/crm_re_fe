"use client"
import { login } from '@/actions/auth-actions';
import ZodErrors from '@/app/component/error/ZodError';
import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';

const INITIAL_STATE = {
  zodErrors: null,
  data: null,
  msg: ''
}

const Login = () => {
  const [formState, formAction] = useFormState(login, INITIAL_STATE)
  const { pending } = useFormStatus()

  return (
    <>
      <h2 className="text-primary text-center text-2xl font-semibold">Login</h2>
      <form className="mt-4" action={formAction}>
        <div className="mb-4">
          <label className="text-neutral block">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full"
            placeholder="Enter your email"
          />
          <ZodErrors error={formState?.zodErrors?.email} />
        </div>
        <div className="mb-4">
          <label className="text-neutral block">Password</label>
          <input
            type="password"
            name="password"
            className="input input-bordered w-full"
            placeholder="Enter your password"
          />
          <ZodErrors error={formState?.zodErrors?.password} />
        </div>
        <button className="btn btn-primary w-full" disabled={pending} type='submit'>{pending ? 'Loading...' : 'Login'}</button>
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
