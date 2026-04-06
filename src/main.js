import { createInitialState, selectConversation } from "./app-state.js";

const appElement = document.querySelector("#app");
let state = createInitialState();

render();

function render() {
  const selectedConversation = state.conversations.find(
    (conversation) => conversation.id === state.selectedConversationId
  );

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
                    <button
                      type="button"
                      class="${item.id === state.selectedConversationId ? "is-active" : ""}"
                      data-conversation-id="${item.id}"
                    >
                      <span>${item.name}</span>
                      <span class="conversation-list__meta">${getConversationSummary(item.id)}</span>
                    </button>
                  </li>
                `
              )
              .join("")}
          </ul>
        </section>
      </aside>

      <main class="main-panel">
        ${
          selectedConversation
            ? `
              <section class="main-panel__card">
                <p class="main-panel__eyebrow">Conversation</p>
                <h2 class="main-panel__title">${selectedConversation.name}</h2>
                <p class="main-panel__body">${getConversationSummary(selectedConversation.id)}</p>
              </section>
            `
            : `
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
            `
        }
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

function getConversationSummary(conversationId) {
  return (
    state.messages.find((message) => message.conversationId === conversationId)?.body ??
    "No messages yet"
  );
}
