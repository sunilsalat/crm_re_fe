"use client"
import { register } from '@/actions/auth-actions';
import ZodErrors from '@/app/component/error/ZodError';
import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';


const INITIAL_STATE = {
  zodErrors: null,
  data: null,
  msg: ''
}

const Register = () => {
  const [formState, formAction] = useFormState(register, INITIAL_STATE)
  const { pending } = useFormStatus()

  return (
    <>
      <h2 className="text-2xl font-semibold text-center text-primary">Register</h2>
      <form className="mt-4" action={formAction}>
        <div className="mb-4">
          <label className="block text-neutral">First Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            name="firstName"
            placeholder="Enter your first name"
          />
          <ZodErrors error={formState?.zodErrors?.firstName} />
        </div>
        <div className="mb-4">
          <label className="block text-neutral">Last Name</label>
          <input
            type="text"
            name='lastName'
            className="input input-bordered w-full"
            placeholder="Enter your last name"
          />
          <ZodErrors error={formState?.zodErrors?.lastName} />

        </div>
        <div className="mb-4">
          <label className="block text-neutral">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full"
            placeholder="Enter your email"
          />
          <ZodErrors error={formState?.zodErrors?.email} />

        </div>
        <div className="mb-4">
          <label className="block text-neutral">Phone</label>
          <input
            type="text"
            name="phone"
            className="input input-bordered w-full"
            placeholder="Enter your phone number"
          />
          <ZodErrors error={formState?.zodErrors?.phone} />

        </div>
        <div className="mb-4">
          <label className="block text-neutral">Password</label>
          <input
            type="password"
            name='password'
            className="input input-bordered w-full"
            placeholder="Enter your password"
          />
          <ZodErrors error={formState?.zodErrors?.password} />

        </div>
        <div className="mb-4">
          <label className="block text-neutral">Confirm Password</label>
          <input
            type="password"
            name='confirmPassword'
            className="input input-bordered w-full"
            placeholder="Enter your password"
          />
          <ZodErrors error={formState?.zodErrors?.confirmPassword} />

        </div>
        <button className="btn btn-primary w-full" disabled={pending} type='submit'>{pending ? 'Loading...' : 'Register'}</button>
      </form>
      <p className="text-center mt-4 text-neutral" >
        Already have an account? <Link href="/login" className='text-primary'>Login</Link>
      </p>
    </>

  );
};

export default Register;
