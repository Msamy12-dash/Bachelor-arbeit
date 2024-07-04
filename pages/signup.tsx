import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Signup() {
  const [name, setName] = useState('');
  // Default role set to 'user'
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
    <div className="ls-container">
      <div className="ls-form-box">
        <h1 className="ls-form-title">Sign Up</h1>
        <form onSubmit={handleSubmit} className="ls-form">
          <input
            type="text"
            className="ls-input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Username"
            required
          />
          <select
            className="ls-select-field"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="ls-submit-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

