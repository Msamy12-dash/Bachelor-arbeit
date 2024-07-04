import { signIn } from 'next-auth/react';
import { useState } from 'react';


export default function Login() {
  const [name, setName] = useState('');
  // Default role set to 'user'
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
    <div className="ls-container">
      <div className="ls-form-box">
        <h1 className="ls-form-title">Login</h1>
        <form onSubmit={handleSubmit} className="ls-form">
          <input
            type="text"
            className="ls-input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
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
          <button type="submit" className="ls-submit-button">Login</button>
        </form>
      </div>
    </div>
  );
}




