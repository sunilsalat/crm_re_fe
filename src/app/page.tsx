import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4">
      Landing Screen <Link href='/login' className="bg-blue-950 px-4 py-2 rounded-md text-white">Login</Link> <Link href='/dashboard' className="bg-blue-950 px-4 py-2 mx-3 rounded-md text-white">Dashboard</Link>
    </main>
  );
}
