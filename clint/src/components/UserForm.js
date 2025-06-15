import { useState } from 'react';
import { createUser } from '../services/api';

export default function UserForm({ refresh }) {
  const [form, setForm] = useState({ name: '', email: '' });

  return (
    <div>
      <input
        className="border p-2 w-full"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className="border p-2 w-full mt-2"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2"
        onClick={async () => {
          await createUser(form);
          setForm({ name: '', email: '' });
          refresh();
        }}
      >
        Add User
      </button>
    </div>
  );
}
