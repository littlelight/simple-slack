const sidebarItems = [
  { id: "placeholder-1", name: "Jordan", summary: "Design review later today", isActive: true },
  { id: "placeholder-2", name: "# launch-plan", summary: "Planning notes live here", isActive: false }
];

const appElement = document.querySelector("#app");

appElement.innerHTML = `
  <div class="app-shell">
    <aside class="sidebar">
      <h1 class="sidebar__title">Simple Slack</h1>
      <p class="sidebar__subtitle">Sprint 1 app shell</p>

      <section>
        <h2 class="sidebar__section-title">Conversations</h2>
        <ul class="conversation-list">
          ${sidebarItems
            .map(
              (item) => `
                <li>
                  <button type="button" class="${item.isActive ? "is-active" : ""}">
                    <span>${item.name}</span>
                    <span class="conversation-list__meta">${item.summary}</span>
                  </button>
                </li>
              `
            )
            .join("")}
        </ul>
      </section>
    </aside>
  </div>
`;
