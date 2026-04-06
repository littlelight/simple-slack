import test from "node:test";
import assert from "node:assert/strict";

import { createInitialState } from "../src/app-state.js";

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
