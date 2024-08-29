'use client';
import { LoginFormData } from '@/app/types/types';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { EMAIL, PASSWORD } from '@/constant/auth';
import { authValidators } from '@/form-validators/authValidators';
import { useAppDispatch, useAppSelector } from '@/hook';
import { userLogin } from '@/redux/features/auth/authAsyncActions';
import { loginType } from '@/app/types/asyncActions';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<LoginFormData>();

  const dispatch = useAppDispatch();

  const { loading } = useAppSelector((state) => state.auth);

  const onSubmit = (data: LoginFormData) => {
    dispatch(userLogin(data)).then((e) => {
      if (e.type === `${loginType}/fulfilled`) {
        router.push('/dashboard');
      }
    });
  };

  return (
    <>

      <div>

        <div className='relative'>
          <Image src={'/img/real-estate-logo-942759067F-seeklogo.png'} height={100} className='h-full w-[30%] m-auto' width={140} alt={'login-img'} ></Image>
        </div>

        <div className='text-center'>
          <h2 className='mb-2 mt-4 text-black font-semibold md:text-[36px] text-[26px]'>Log in to your account</h2>
          <p className='mb-4 text-gray-7 font-gilroy-medium md:text-[18px] text-[14px]'>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
        </div>

        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="text-neutral block mb-2">Email</label>
          <input
            type="email"
            {...register(EMAIL, authValidators[EMAIL])}
            className={`w-full p-2 rounded-sm border-2 ${getValues(EMAIL) ? 'border-magenta' : 'border-gray-300'} ${errors[EMAIL]?.message ? 'border-red-500' : 'border-gray-300'} `}
            placeholder="Enter your email"
          />
          {errors[EMAIL]?.message && (
            <span className="mt-2 block text-red-500 ">
              {errors[EMAIL]?.message}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="text-neutral block mb-2">Password</label>
          <input
            type="password"
            {...register(PASSWORD, authValidators[PASSWORD])}
            className={`w-full p-2 rounded-sm border-2 ${getValues(PASSWORD) ? 'border-magenta' : 'border-gray-300'} ${errors[PASSWORD]?.message ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter your password"
          />
          {errors[PASSWORD]?.message && (
            <span className="mt-2 block text-red-500 ">
              {errors[PASSWORD]?.message}
            </span>
          )}
        </div>
        <button className="btn btn-primary w-full bg-blue-500 text-white font-semibold py-2 rounded-sm" type="submit">
          {loading ? 'Loading...' : 'Login'}
        </button>
        <div className='pt-4 text-center underline '><Link href={'/register'} className='hover:text-blue-500'>Register now</Link></div>
      </form>

        {/* <div className='flex my-10 items-center'>
              <hr className='w-1/2 border-[1px] border-gray-13' />
              <p className='px-4 text-black text-[16px] font-gilroy-medium'> Or </p>
              <hr className='w-1/2 border-[1px] border-gray-13' />
              </div> */}

        {/* <ExternalAuth isPending={handleIsPending} /> */}

        {/* <p className='mt-6 text-center text-black font-gilroy-medium'>Already have an account? <Link href={"/auth/register"}><span className='text-blue cursor-pointer'> Register </span></Link> </p> */}

      </div>


    </>
  );
};

export default Login;
