const github_base = "https://api.github.com";

// fetch

// "/repos/{owner}/{repo}/issues"
const form = document.getElementById("form");
const main = document.getElementById("main");
const searchInput = document.getElementById("search-input");
const githubCard = document.getElementById("github-card");

const headers = {
  Authorization: `token ${config.githubToken}`,
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchInputValue = document.getElementById("search-input").value;

  getContent(searchInputValue);
  document.getElementById("search-input").value = "";
  // githubMainRepos.innerHTML = "";
});

const getContent = async (username) => {
  try {
    const obj = await fetch(`${github_base}/users/${username.trim()}`, {
      headers,
    });

    if (obj.status === 404) {
      return createErrorCard("No profile with this username!");
    }

    const content = await obj.json();

    contentCardHTML(content);
    mainReposContent(username);
  } catch (error) {
    console.log(error);
  }
};

function contentCardHTML(content, mainRepos) {
  const cardHTML = `
  <div id="github-card" class="github-card">
        <div>
        <img src='${content.avatar_url}'
          id="github-avatar"
          alt="${content.name}"
        />
        </div>
        <div class="github-info-wrapper">
          <div id="github-name">${content.name}</div>
          <p id="github-bio">${content.bio}</p>
          <div class="github-info">
            <div id="github-followers">${content.followers} <span>Followers</span> </div>
            <div id="github-following">${content.following} <span>Following</span> </div>
            <div id="github-repos-count">${content.public_repos} <span>Repos</span></div>
          </div>
          <div class="github-main-repos"></div>
        </div>
      </div>
  `;

  main.innerHTML = cardHTML;
}

async function mainReposContent(user) {
  try {
    const allReposObj = await fetch(
      `${github_base}/users/${user.trim()}/repos?sort=created`,
      { headers }
    ); // sort by what
    const allRepos = await allReposObj.json(); // json;

    allRepos.map((repo, i) => {
      if (i < 5) {
        const githubMainRepos = document.querySelector(".github-main-repos");
        githubMainRepos.innerHTML += `<span><a href="${repo.html_url}">${repo.name}</a></span>`;
      }
    });
  } catch (error) {
    console.log(error);
  }
}

function createErrorCard(msg) {
  const errorHTML = `<h1 class="github-card">${msg}</h1>`;

  main.innerHTML = errorHTML;
}
