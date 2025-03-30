import { useState } from "react";
import { fetchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);

    try {
      const data = await fetchUsers(username, location, minRepos, 1);
      setUsers(data);
    } catch (err) {
      setError("Looks like we cant find the user.");
    }
    setLoading(false);
  };

  const handleLoadMore = async () => {
    setLoading(true);
    try {
      const moreUsers = await fetchUsers(username, location, minRepos, page + 1);
      setUsers((prevUsers) => [...prevUsers, ...moreUsers]);
      setPage(page + 1);
    } catch (err) {
      setError("Failed to load more results");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">GitHub User Search</h2>
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location (e.g., 'New York')"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="mt-4">
        {users.map((user) => (
          <div key={user.id} className="flex items-center space-x-4 p-4 border-b">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <h3 className="font-bold">{user.login}</h3>
              {user.location && <p className="text-gray-600">📍 {user.location}</p>}
              <p className="text-gray-600">📦 {user.public_repos} Repositories</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {users.length > 0 && (
        <button
          onClick={handleLoadMore}
          className="w-full bg-gray-600 text-white p-2 rounded hover:bg-gray-700 mt-4"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
