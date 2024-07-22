import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { getOrCreateUser } from '@/lib/userUtils';
import { Role } from '@/party/types';

export default function Login() {
  const [name, setName] = useState('');
  const [role, setRole] = useState<Role>(Role.User);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await getOrCreateUser(name, role as Role);
      // You might want to store the user in a context or global state here
      await signIn('credentials', {
        redirect: false,
        name: user.name,
        role: user.role,
        id: user.id,
      });
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-5 rounded-lg shadow-md text-center w-80">
        <h1 className="text-2xl mb-5">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
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
            onChange={(e) => setRole(e.target.value as Role)}
            required
          >
            <option value={Role.User}>User</option>
            <option value={Role.Admin}>Admin</option>
          </select>
          <button type="submit" className="p-2 text-lg bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}