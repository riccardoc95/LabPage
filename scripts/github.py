import requests
import json
import os

GITHUB_USER = "riccardoc95"  # Replace with your GitHub username
TOKEN = None  # Optional: GitHub token for higher rate limits, or keep None

HEADERS = {
    "Accept": "application/vnd.github+json",
}
if TOKEN:
    HEADERS["Authorization"] = f"Bearer {TOKEN}"

def get_repos(user):
    repos = []
    page = 1
    per_page = 100  # max per page

    while True:
        url = f"https://api.github.com/users/{user}/repos?per_page={per_page}&page={page}"
        resp = requests.get(url, headers=HEADERS)
        if resp.status_code != 200:
            print(f"❌ Failed to fetch repos: {resp.status_code}")
            break

        data = resp.json()
        if not data:
            break  # no more repos

        repos.extend(data)
        page += 1

    return repos

def main():
    repos = get_repos(GITHUB_USER)
    print(f"📦 Found {len(repos)} repos for user '{GITHUB_USER}'")

    result = []

    for repo in repos:
        result.append({
            "name": repo.get("name"),
            "full_name": repo.get("full_name"),
            "description": repo.get("description"),
            "homepage": repo.get("homepage"),
            "private": repo.get("private"),
            "visibility": repo.get("visibility"),
            "topics": repo.get("topics", []),
            "license": repo.get("license")["name"] if repo.get("license") else None,
            "default_branch": repo.get("default_branch"),
            "created_at": repo.get("created_at"),
            "updated_at": repo.get("updated_at"),
            "html_url": repo.get("html_url")
        })

    # Ensure output directory exists
    os.makedirs("scripts", exist_ok=True)

    # Save to JSON
    with open("scripts/github_repos_about.json", "w", encoding="utf-8") as f:
        json.dump(result, f, indent=2, ensure_ascii=False)

    print("✅ Saved data to scripts/github_repos_about.json")

if __name__ == "__main__":
    main()
