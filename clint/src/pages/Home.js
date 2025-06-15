import { useEffect, useState } from 'react';
import { getUsers, getPosts } from '../services/api';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const refresh = async () => {
    try {
      const u = await getUsers();
      const p = await getPosts();
      setUsers(Array.isArray(u.data.data) ? u.data.data : []);
      setPosts(Array.isArray(p.data.data) ? p.data.data : []);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };
  

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">MERN CRUD with Users & Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold">Create User</h2>
          <UserForm refresh={refresh} />
          <h3 className="mt-4 font-semibold">All Users</h3>
          <UserList users={users} />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Create Post</h2>
          <PostForm users={users} refresh={refresh} />
          <h3 className="mt-4 font-semibold">All Posts</h3>
          <PostList posts={posts} />
        </div>
      </div>
    </div>
  );
}
