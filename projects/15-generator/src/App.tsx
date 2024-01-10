import React, { useState, useEffect } from "react"
import { getRepos } from "./services/octokit.services"

function RepoList() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reposData = await getRepos()
        setRepos(reposData)
      } catch (error) {
        console.error("Error fetching repos:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>My Repositories</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {repos.map((repo:any) => (
            <li key={repo.id}>
              <strong>{repo.name}</strong>
              <p>{repo.description}</p>
              <p>Language: {repo.language}</p>
              <p>Stars: {repo.stargazers_count}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default RepoList
