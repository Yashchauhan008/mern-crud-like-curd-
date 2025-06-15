export default function UserList({ users }) {
    if (!Array.isArray(users)) return <p>No users to display.</p>;
  
    return (
      <ul className="mt-2">
        {users.map((u) => (
          <li key={u._id}>
            {u.name} ({u.email})
          </li>
        ))}
      </ul>
    );
  }
  