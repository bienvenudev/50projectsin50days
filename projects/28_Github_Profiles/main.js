const github_base = "https://api.github.com";

const form = document.getElementById("form");
const main = document.getElementById("main");
const searchInput = document.getElementById("search-input");
const githubCard = document.getElementById("github-card");

// const headers = {
//   Authorization: `token ${config.githubToken}`,
// };

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchInputValue = document.getElementById("search-input").value;

  getContent(searchInputValue);
  document.getElementById("search-input").value = "";
});

const getContent = async (username) => {
  try {
    // Make API calls in parallel using Promise.all
    const [userResponse, reposResponse] = await Promise.all([
      fetch(`${github_base}/users/${username.trim()}`),
      fetch(`${github_base}/users/${username.trim()}/repos?sort=created`),
    ]);

    if (userResponse.status === 404) {
      return createErrorCard("No profile with this username!");
    }

    const userData = await userResponse.json();
    const reposData = await reposResponse.json();

    // Render everything at once
    renderFullContent(userData, reposData);
  } catch (error) {
    console.error(error);
    createErrorCard("Error fetching profile data");
  }
};

function renderFullContent(userData, reposData) {
  const reposHTML = reposData
    .slice(0, 5)
    .map((repo) => {
      return `<span><a href="${repo.html_url}">${repo.name}</a></span>`;
    })
    .join(" ");
  const cardHTML = `
  <div id="github-card" class="github-card">
        <div>
        <img src='${userData.avatar_url}'
          id="github-avatar"
          alt="${userData.name}"
        />
        </div>
        <div class="github-info-wrapper">
          <div id="github-name">${userData.name}</div>
          <p id="github-bio">${userData.bio}</p>
          <div class="github-info">
            <div id="github-followers">${userData.followers} <span>Followers</span> </div>
            <div id="github-following">${userData.following} <span>Following</span> </div>
            <div id="github-repos-count">${userData.public_repos} <span>Repos</span></div>
          </div>
          <div class="github-main-repos">${reposHTML}</div>
        </div>
      </div>
  `;

  main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  const errorHTML = `<h1 class="github-card">${msg}</h1>`;

  main.innerHTML = errorHTML;
}
