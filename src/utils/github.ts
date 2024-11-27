export async function fetchGitHubProfile(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return response.json();
}

export async function fetchGitHubRepos(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
  return response.json();
}