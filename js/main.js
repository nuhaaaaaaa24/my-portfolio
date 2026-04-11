const container = document.getElementById("project-container");

projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">

    <div class="card-body">

      <span class="card-tag">PROJECT</span>

      <h3>${p.name}</h3>

      <p>${p.description}</p>

      <div style="margin-top:12px; display:flex; gap:10px;">
        <a class="github-btn" href="${p.github}" target="_blank">
          <i class="fa-brands fa-github"></i> Code
        </a>

        <a class="github-btn" href="${p.demo}" target="_blank">
          Live
        </a>
      </div>

    </div>
  `;

  container.appendChild(card);
});