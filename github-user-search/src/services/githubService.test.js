import { fetchUserData } from "./githubService";
import axios from "axios";

jest.mock("axios");

describe("GitHub API Service", () => {
  it("fetches user data successfully", async () => {
    const mockData = {
      login: "octocat",
      avatar_url: "https://github.com/images/error/octocat_happy.gif",
      html_url: "https://github.com/octocat",
    };

    axios.get.mockResolvedValue({ data: mockData });

    const data = await fetchUserData("octocat");

    expect(data).toEqual(mockData);
  });

  it("handles user not found error", async () => {
    axios.get.mockRejectedValue(new Error("User not found"));

    await expect(fetchUserData("unknown-user")).rejects.toThrow("User not found");
  });
});
