import test from "node:test";
import assert from "node:assert/strict";

import {
  createInitialState,
  getMainViewModel,
  selectConversation
} from "../src/app-state.js";

test("initial state has the expected shared shape", () => {
  const state = createInitialState();

  assert.equal(state.currentUserId, "user-1");
  assert.equal(Array.isArray(state.users), true);
  assert.equal(Array.isArray(state.conversations), true);
  assert.equal(Array.isArray(state.messages), true);
  assert.equal(state.selectedConversationId, null);
  assert.equal(state.users.length >= 3, true);
  assert.equal(state.conversations.length >= 2, true);
});

test("selecting a conversation updates the active chat", () => {
  const state = createInitialState();
  const nextState = selectConversation(state, "dm-1");
  const viewModel = getMainViewModel(nextState);

  assert.equal(nextState.selectedConversationId, "dm-1");
  assert.equal(viewModel.isEmpty, false);
  assert.equal(viewModel.selectedConversation?.id, "dm-1");
  assert.equal(viewModel.sidebarItems.find((item) => item.id === "dm-1")?.isActive, true);
});

test("invalid conversation selection preserves the previous selection", () => {
  const state = selectConversation(createInitialState(), "channel-1");
  const nextState = selectConversation(state, "missing-id");

  assert.equal(nextState.selectedConversationId, "channel-1");
});

test("empty-state logic works when no conversation is selected", () => {
  const state = createInitialState();
  const viewModel = getMainViewModel(state);

  assert.equal(viewModel.isEmpty, true);
  assert.equal(viewModel.selectedConversation, null);
  assert.deepEqual(viewModel.selectedMessages, []);
});
