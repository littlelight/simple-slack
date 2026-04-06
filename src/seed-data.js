export const seedUsers = [
  {
    id: "user-1",
    name: "Avery",
    status: "Available"
  },
  {
    id: "user-2",
    name: "Jordan",
    status: "Reviewing designs"
  },
  {
    id: "user-3",
    name: "Sam",
    status: "Writing docs"
  }
];

export const seedConversations = [
  {
    id: "conversation-1",
    name: "Jordan",
    type: "direct"
  },
  {
    id: "conversation-2",
    name: "# launch-plan",
    type: "channel"
  }
];

export const seedMessages = [
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
];
