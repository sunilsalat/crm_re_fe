// pages/login.js
import Link from 'next/link';

const Login = () => {
  return (
    <>
      <h2 className="text-primary text-center text-2xl font-semibold">Login</h2>
      <form className="mt-4">
        <div className="mb-4">
          <label className="text-neutral block">Email</label>
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="text-neutral block">Password</label>
          <input
            type="password"
            className="input input-bordered w-full"
            placeholder="Enter your password"
          />
        </div>
        <button className="btn btn-primary w-full">Login</button>
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
