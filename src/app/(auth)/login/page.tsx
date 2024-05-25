// pages/login.js
import Link from 'next/link';

const Login = () => {
  return (
    <>
       <h2 className="text-2xl font-semibold text-center text-primary">Login</h2>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-neutral">Email</label>
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-neutral">Password</label>
          <input
            type="password"
            className="input input-bordered w-full"
            placeholder="Enter your password"
          />
        </div>
        <button className="btn btn-primary w-full">Login</button>
      </form>
      <p className="text-center mt-4 text-neutral">
        Dont have an account? <Link href="/register" className="text-primary">Register</Link>
      </p>
    </>
   
  );
};

export default Login;
