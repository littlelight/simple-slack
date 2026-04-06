import { seedConversations, seedMessages, seedUsers } from "./seed-data.js";

export function createInitialState() {
  return {
    currentUser: seedUsers[0],
    users: seedUsers,
    conversations: seedConversations,
    messages: seedMessages,
    selectedConversationId: null
  };
}

export function selectConversation(state, conversationId) {
  return {
    ...state,
    selectedConversationId: conversationId
  };
}

export function getMainViewModel(state) {
  const selectedConversation =
    state.conversations.find((conversation) => conversation.id === state.selectedConversationId) ?? null;

  return {
    selectedConversation,
    isEmpty: selectedConversation === null
  };
}
