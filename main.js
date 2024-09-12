document.addEventListener("DOMContentLoaded", function () {
  const photoProfile = document.querySelector(".profile-avatar");
  const name = document.querySelector(".profile-name");
  const username = document.querySelector(".profile-username");
  const repositories = document.querySelector(".repositories");
  const followersD = document.querySelector(".followers");
  const followingD = document.querySelector(".following");
  const profileLink = document.querySelector(".profile-link");

  const endpoint = "https://api.github.com/users/vinisantosn";

  fetch(endpoint)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      photoProfile.src = json.avatar_url;
      name.innerText = json.name;
      username.innerText = `@${json.login}`;
      repositories.innerText = json.public_repos;
      followersD.innerText = json.followers;
      followingD.innerText = json.following;
      profileLink.href = json.html_url;
    })
    .catch(function (erro) {
      alert("Verificar endpoint.")
    });
});
