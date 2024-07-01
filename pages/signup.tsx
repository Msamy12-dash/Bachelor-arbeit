import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Signup() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
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
    <form onSubmit={handleSubmit}>
      <input type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Username" required />
      <input type="role" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Rolle" required />
      <button type="submit">Sign Up</button>
    </form>
  );
}
