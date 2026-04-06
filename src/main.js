import { createInitialState } from "./app-state.js";

const appElement = document.querySelector("#app");
const state = createInitialState();

appElement.innerHTML = `
  <div class="app-shell">
    <aside class="sidebar">
      <h1 class="sidebar__title">Simple Slack</h1>
      <p class="sidebar__subtitle">${state.users.length} teammates loaded</p>

      <section>
        <h2 class="sidebar__section-title">Conversations</h2>
        <ul class="conversation-list">
          ${state.conversations
            .map(
              (item) => `
                <li>
                  <button type="button">
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

    <main class="main-panel">
      <section class="main-panel__card empty-state">
        <div class="empty-state__content">
          <p class="empty-state__eyebrow">No conversation selected</p>
          <h2 class="main-panel__title">Pick a conversation to get started.</h2>
          <p class="main-panel__body">
            The sidebar is ready, and the main panel now has a dedicated empty state
            until an active thread is selected.
          </p>
        </div>
      </section>
    </main>
  </div>
`;
