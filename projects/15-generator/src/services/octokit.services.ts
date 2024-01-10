import { Octokit } from "octokit"

export const octokit = new Octokit({
  auth: import.meta.env.GITHUB_TOKEN,
})


export async function getRepos() {
  const response = await octokit.request("GET /users/andeveling/repos", {
    username: "andeveling",
  })
  return response.data
}