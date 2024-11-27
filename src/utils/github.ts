const GITHUB_TOKEN = import.meta.env.PUBLIC_GITHUB_TOKEN;

const headers = GITHUB_TOKEN
  ? { Authorization: `Bearer ${GITHUB_TOKEN}` }
  : {};

export async function fetchGitHubProfile(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, { headers });
    if (!response.ok) {
      console.error('Failed to fetch GitHub profile:', await response.text());
      return {
        name: 'Sanjeev Kumar',
        bio: 'Full Stack Developer',
        location: 'India',
        twitter_username: '',
        blog: '',
        html_url: `https://github.com/${username}`,
      };
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    return {
      name: 'Sanjeev Kumar',
      bio: 'Full Stack Developer',
      location: 'India',
      twitter_username: '',
      blog: '',
      html_url: `https://github.com/${username}`,
    };
  }
}

export async function fetchGitHubRepos(username: string) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      { headers }
    );
    if (!response.ok) {
      console.error('Failed to fetch GitHub repos:', await response.text());
      return [];
    }
    const repos = await response.json();
    return Array.isArray(repos) ? repos : [];
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}