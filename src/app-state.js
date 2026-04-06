import { seedConversations, seedMessages, seedUsers } from "./seed-data.js";

export function createInitialState() {
  return {
    currentUserId: "user-1",
    users: seedUsers,
    conversations: seedConversations,
    messages: seedMessages,
    selectedConversationId: null
  };
}

export function selectConversation(state, conversationId) {
  const conversationExists = state.conversations.some((conversation) => conversation.id === conversationId);

  return {
    ...state,
    selectedConversationId: conversationExists ? conversationId : state.selectedConversationId
  };
}

export function getCurrentUser(state) {
  return state.users.find((user) => user.id === state.currentUserId) ?? null;
}

export function getSelectedConversation(state) {
  return (
    state.conversations.find((conversation) => conversation.id === state.selectedConversationId) ?? null
  );
}

export function getConversationMessages(state, conversationId) {
  return state.messages.filter((message) => message.conversationId === conversationId);
}

export function getConversationSummary(state, conversation) {
  const messages = getConversationMessages(state, conversation.id);
  const lastMessage = messages[messages.length - 1];

  if (!lastMessage) {
    return "No messages yet";
  }

  const sender = state.users.find((user) => user.id === lastMessage.senderId);
  return `${sender?.name ?? "Unknown"}: ${lastMessage.body}`;
}

export function getMainViewModel(state) {
  const currentUser = getCurrentUser(state);
  const selectedConversation = getSelectedConversation(state);

  return {
    currentUser,
    sidebarItems: state.conversations.map((conversation) => ({
      id: conversation.id,
      name: conversation.name,
      type: conversation.type,
      summary: getConversationSummary(state, conversation),
      isActive: conversation.id === state.selectedConversationId
    })),
    selectedConversation,
    selectedMessages: selectedConversation
      ? getConversationMessages(state, selectedConversation.id)
      : [],
    isEmpty: selectedConversation === null
  };
}
