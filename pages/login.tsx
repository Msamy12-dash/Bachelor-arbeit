import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function Login() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('credentials', {
      redirect: false,
      name,
      role,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="role" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Rolle" required />
      <button type="submit">Login</button>
    </form>
  );
}
