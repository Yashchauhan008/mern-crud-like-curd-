export default function PostList({ posts }) {
    if (!Array.isArray(posts)) return <p>No posts to display.</p>;
  
    return (
      <ul className="mt-2">
        {posts.map((p) => (
          <li key={p._id} className="mb-2">
            <strong>{p.title}</strong> by {p.user?.name || 'Unknown'}<br />
            <span className="text-sm text-gray-600">{p.content}</span>
          </li>
        ))}
      </ul>
    );
  }
  