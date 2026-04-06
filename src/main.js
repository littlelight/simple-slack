import { createInitialState, getMainViewModel, selectConversation } from "./app-state.js";

const appElement = document.querySelector("#app");
let state = createInitialState();

render();

function render() {
  const viewModel = getMainViewModel(state);

  appElement.innerHTML = `
    <div class="app-shell">
      <aside class="sidebar">
        <h1 class="sidebar__title">Simple Slack</h1>
        <p class="sidebar__subtitle">Sprint 1 app shell and shared state</p>

        <section>
          <h2 class="sidebar__section-title">Conversations</h2>
          <ul class="conversation-list">
            ${viewModel.sidebarItems
              .map(
                (item) => `
                  <li>
                    <button
                      type="button"
                      class="${item.isActive ? "is-active" : ""}"
                      data-conversation-id="${item.id}"
                    >
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
        <header class="topbar">
          <div>
            <p class="topbar__eyebrow">Workspace</p>
            <h2 class="topbar__title">Team chat</h2>
          </div>
          <div class="topbar__user">
            <div class="avatar" aria-hidden="true">${getInitials(viewModel.currentUser?.name)}</div>
            <div>
              <strong>${viewModel.currentUser?.name ?? "Unknown"}</strong>
              <div>${viewModel.currentUser?.status ?? ""}</div>
            </div>
          </div>
        </header>

        <section class="chat-stage">
          ${viewModel.isEmpty ? renderEmptyState() : renderConversation(viewModel)}
        </section>
      </main>
    </div>
  `;

  bindEvents();
}

function bindEvents() {
  const buttons = appElement.querySelectorAll("[data-conversation-id]");

  for (const button of buttons) {
    button.addEventListener("click", () => {
      state = selectConversation(state, button.dataset.conversationId);
      render();
    });
  }
}

function renderEmptyState() {
  return `
    <div class="empty-state" data-testid="empty-state">
      <div class="empty-state__content">
        <p class="empty-state__eyebrow">No conversation selected</p>
        <h2>Pick a conversation to get started.</h2>
        <p>
          Sprint 1 keeps this simple: the sidebar is live, the state is seeded,
          and the main panel stays clean until a thread is selected.
        </p>
      </div>
    </div>
  `;
}

function renderConversation(viewModel) {
  return `
    <article class="conversation-card">
      <div class="conversation-card__header">
        <p class="conversation-card__eyebrow">${viewModel.selectedConversation.type}</p>
        <h2 class="conversation-card__title">${viewModel.selectedConversation.name}</h2>
      </div>
      <div class="conversation-card__body">
        <ul class="message-preview-list">
          ${viewModel.selectedMessages
            .map(
              (message) => `
                <li class="message-preview">
                  <span class="message-preview__author">${getSenderName(viewModel, message.senderId)}</span>
                  <p class="message-preview__body">${message.body}</p>
                </li>
              `
            )
            .join("")}
        </ul>
      </div>
    </article>
  `;
}

function getSenderName(viewModel, senderId) {
  return viewModel.currentUser?.id === senderId
    ? viewModel.currentUser.name
    : state.users.find((user) => user.id === senderId)?.name ?? "Unknown";
}

function getInitials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}
