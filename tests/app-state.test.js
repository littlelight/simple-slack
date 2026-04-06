import test from "node:test";
import assert from "node:assert/strict";

import { createInitialState, getMainViewModel, selectConversation } from "../src/app-state.js";

test("initial state has the expected shared shape", () => {
  const state = createInitialState();

  assert.equal(state.currentUser.id, "user-1");
  assert.equal(Array.isArray(state.users), true);
  assert.equal(Array.isArray(state.conversations), true);
  assert.equal(Array.isArray(state.messages), true);
  assert.equal(state.selectedConversationId, null);
  assert.equal(state.users.length >= 3, true);
  assert.equal(state.conversations.length >= 2, true);
});

test("selecting a conversation updates active chat state", () => {
  const nextState = selectConversation(createInitialState(), "conversation-1");
  const viewModel = getMainViewModel(nextState);

  assert.equal(nextState.selectedConversationId, "conversation-1");
  assert.equal(viewModel.selectedConversation?.id, "conversation-1");
  assert.equal(viewModel.isEmpty, false);
});

test("empty-state logic works when no conversation is selected", () => {
  const viewModel = getMainViewModel(createInitialState());

  assert.equal(viewModel.selectedConversation, null);
  assert.equal(viewModel.isEmpty, true);
});
