import { fetchUsers } from "./githubService";
import axios from "axios";

jest.mock("axios");

describe("GitHub API Service", () => {
  it("fetches users successfully with query", async () => {
    const mockData = {
      items: [
        {
          login: "octocat",
          avatar_url: "https://github.com/images/error/octocat_happy.gif",
          html_url: "https://github.com/octocat",
          location: "San Francisco",
          public_repos: 42,
        },
      ],
    };

    axios.get.mockResolvedValue({ data: mockData });

    const users = await fetchUsers({ query: "octocat", location: "", minRepos: "" });

    expect(users).toEqual(mockData.items);
  });

  it("handles API rate limit error", async () => {
    axios.get.mockRejectedValue({
      response: { status: 403 },
    });

    await expect(fetchUsers({ query: "octocat" })).rejects.toThrow("GitHub API rate limit exceeded. Try again later.");
  });

  it("returns error when no users found", async () => {
    axios.get.mockRejectedValue(new Error("No users found"));

    await expect(fetchUsers({ query: "unknownuser" })).rejects.toThrow("No users found. Try different search criteria.");
  });
});
