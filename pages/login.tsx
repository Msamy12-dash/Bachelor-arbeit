import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function Login() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('user'); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('credentials', {
      redirect: false,
      name,
      role,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" p-5 rounded-lg shadow-md text-center w-80">
        <h1 className="text-2xl mb-5">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            className="p-2 text-lg border rounded-md w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <select
            className="p-2 text-lg border border-gray-300 rounded-md w-full"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="p-2 text-lg bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}




