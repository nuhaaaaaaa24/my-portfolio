const container = document.getElementById("project-container");

projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>${p.description}</p>
    <a href="${p.github}" target="_blank">GitHub</a> |
    <a href="${p.demo}" target="_blank">Live</a>
  `;

  container.appendChild(card);
});