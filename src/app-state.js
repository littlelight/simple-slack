import { seedUsers } from "./seed-data.js";

export function createInitialState() {
  return {
    currentUser: seedUsers[0],
    users: seedUsers,
    conversations: [
      {
        id: "conversation-1",
        name: "Jordan"
      },
      {
        id: "conversation-2",
        name: "# launch-plan"
      }
    ],
    messages: [
      {
        id: "message-1",
        conversationId: "conversation-1",
        body: "Design review later today"
      },
      {
        id: "message-2",
        conversationId: "conversation-2",
        body: "Planning notes live here"
      }
    ],
    selectedConversationId: null
  };
}

export function selectConversation(state, conversationId) {
  return {
    ...state,
    selectedConversationId: conversationId
  };
}
