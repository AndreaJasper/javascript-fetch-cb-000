const app = "I don't do much.";

const toke = 'dfed2f1224cdf062d7ed6ff68e3d82480989e41d'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));