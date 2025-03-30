import { useState } from "react";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query, location, minRepos });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
      <input
        type="text"
        placeholder="GitHub Username"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        placeholder="Location (e.g., 'New York')"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="p-2 border border-gray-300 rounded-md"
      />
      <input
        type="number"
        placeholder="Min Repos (e.g., 10)"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="p-2 border border-gray-300 rounded-md"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
        Search
      </button>
    </form>
  );
}

export default Search;
