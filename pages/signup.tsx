import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Signup() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('user'); 
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, role }),
    });

    if (res.ok) {
      router.push('/login');
    } else {
      console.error('Failed to sign up');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className=" p-5 rounded-lg shadow-md text-center w-80">
        <h1 className="text-2xl mb-5">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            className="p-2 text-lg border rounded-md w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Username"
            required
          />
          <select
            className="p-2 text-lg border rounded-md w-full"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="p-2 text-lg bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

