import { useState } from 'react';
import { createPost } from '../services/api';

export default function PostForm({ users, refresh }) {
  const [form, setForm] = useState({ title: '', content: '', user: '' });

  return (
    <div>
      <input
        className="border p-2 w-full"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        className="border p-2 w-full mt-2"
        placeholder="Content"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />
      <select
        className="border p-2 w-full mt-2"
        value={form.user}
        onChange={(e) => setForm({ ...form, user: e.target.value })}
      >
        <option value="">Select User</option>
        {users.map((u) => (
          <option key={u._id} value={u._id}>
            {u.name}
          </option>
        ))}
      </select>
      <button
        className="bg-green-500 text-white px-4 py-2 mt-2"
        onClick={async () => {
          await createPost(form);
          setForm({ title: '', content: '', user: '' });
          refresh();
        }}
      >
        Add Post
      </button>
    </div>
  );
}
